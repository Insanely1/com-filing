import UserModel from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import sendMail from '../config/sendEmail.js';
import dotenv from 'dotenv';
import generateAccessToken from '../utils/generateAcessToken.js';
import generateRefreshToken from '../utils/generateRefreshToken.js';
dotenv.config();
import { catchAsyncError } from '../middlewares/catchAsyncError.js';
import ErrorHandler from '../middlewares/error.js';




export async function registerUserController(request, response) {
  try {
    const { name, email, password } = request.body;
    if (!name || !email || !password) {
      return response.status(400).json({
        message: "Provide email, name, and password",
        error: true,
        success: false
      });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return response.status(400).json({
        message: "Email already exists",
        error: true,
        success: false
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const newUser = new UserModel({
      name,
      email,
      password,   // Let pre("save") hook hash this
      otp,
      otpExpires: Date.now() + 10 * 60 * 1000 // 10 min
    });

    await newUser.save();

    // Send email
    const subject = "Email Verification Code";
    const text = `Your verification code is: ${otp}`;
    await sendMail(email, subject, text);

    console.log("📨 OTP sent to email:", email, " Code:", otp);

    return response.status(200).json({
      success: true,
      error: false,
      message: "User registered successfully. Please check your email for the verification code."
    });

  } catch (error) {
    console.error("Registration Error:", error);
    return response.status(500).json({ message: "Server error. Please try again later.", success: false, error: true });
  }
}

export async function verifyEmailController(request, response) {
  const { email, code } = request.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return response.status(404).json({
        success: false,
        error: true,
        message: "User not found"
      });
    }

    const isCodeValid = user.otp === code;
    const isCodeNotExpired = user.otpExpires > Date.now();

    if (!isCodeValid) {
      return response.status(400).json({ success: false, error: true, message: "Invalid OTP" });
    }

    if (!isCodeNotExpired) {
      return response.status(400).json({ success: false, error: true, message: "OTP has expired" });
    }

    user.verify_email = true;
    user.otp = null;
    user.otpExpires = null;
    await user.save();

    return response.status(200).json({ success: true, error: false, message: "Email verified successfully" });

  } catch (error) {
    console.error("Email Verification Error:", error);
    return response.status(500).json({
      message: error.message || "Server error",
      success: false,
      error: true
    });
  }
}

export async function loginUserController(request, response) {
  const { email, password } = request.body;

  if (!email || !password) {
    return response.status(400).json({
      message: "Please provide email and password",
      error: true,
      success: false
    });
  }

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return response.status(404).json({
        message: "User not found",
        error: true,
        success: false
      });
    }

    if (!user.verify_email) {
      return response.status(400).json({
        message: "Please verify your email before logging in",
        error: true,
        success: false
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return response.status(401).json({
        message: "Invalid password",
        error: true,
        success: false
      });
    }

    const accesstoken = await generateAccessToken(user._id);
    const refreshtoken = await generateRefreshToken(user._id);

    const cookieOption = {
      httpOnly: true,
      secure: true,
      sameSite: 'None'
    };

    response.cookie('refreshToken', refreshtoken, cookieOption);
    response.cookie('accessToken', accesstoken, cookieOption);

    user.last_login_date = new Date();
    await user.save();

    return response.status(200).json({
      success: true,
      error: false,
      message: "Login successful",
      data: {
        accesstoken,
        refreshtoken,
      }
    });

  } catch (error) {
    console.error("Login Error:", error);
    return response.status(500).json({ message: "Server error. Please try again later.", success: false, error: true });
  }
}



export async function logoutUserController(request, response) {
  try {
    const  userId  = request.user.id;

    if (!userId) {
      return response.status(400).json({
        message: "User ID is required",
        error: true,
        success: false
      });
    }

     const cookieOption = {
      httpOnly: true,
      secure : true,
      sameSite: 'None'
    }
    response.cookie('refreshToken',  cookieOption);
    response.cookie('accessToken' , cookieOption);


     const updateUser = await UserModel.findByIdAndUpdate(userId,{
      refreshToken: ""
    })
     
    

    return response.json({
      success: true,
      error: false,
      message: "Logout successful"
    });

  } catch (error) {
    console.error('Logout Error:', error);
    return response.status(500).json({ message: 'Server error. Please try again later.' });
  }
}

