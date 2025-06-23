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
import twilio from 'twilio';

// Initialize Twilio client
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);


export async function registerUserController(request, response) {
  // testEmail.js


  try {

    let user;

    const { name, email, password,phone } = request.body;
    if (!name || !email || !password) {
      return response.status(400).json({
        message: "provide email ,name, pasword",
        error: true,
        success: false
      })
    }
    function validatePhoneNumber(phone) {
      const phoneRegex = /^\+91\d{10}$/; // Adjust regex as needed for your phone number format
      return phoneRegex.test(phone);
    }
   if(!validatePhoneNumber(phone)){
     return response.status(400).json({
       message: "Invalid phone number format",
       error: true,
       success: false
     });
   }

    user = await UserModel.findOne({ email: email });

    if (user) {
      return response.json({
        message: "email already exists",
        error: true,
        success: false
      })
    }


    const verifyCode = () => Math.floor(100000 + Math.random() * 900000).toString();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const otp = verifyCode(); // call the function

    user = new UserModel({
      email,
      password: hashedPassword,
      name: name,
      otp,
      otpExpires: Date.now() + 6000000

    });

    await user.save();



    console.log("📨 OTP being sent:", otp);
    console.log("📨 Sending email to:", email);

    //send verification email
    try {
    async  function sendVerificationCode(verificationMethod,otp,email,phone){
      if (verificationMethod === 'email') {
        const subject = "Email Verification Code";
        const text = `Your verification code is: ${otp}`;
        await sendMail(email, subject, text);
      } else if (verificationMethod === 'phone') {
        const verificationCodeWithSpace = otp.tostring().split(" ").join(" ");
         await client.messages.create({
        twiml:`<Response>
       <Message>
       your verification code is: ${otp}.you can use this code to verify your account.
      </Message>
      </Response>`,
          from: process.env.TWILIO_PHONE_NUMBER,
          to: phone
         })
        console.log(`Sending SMS to ${phone}: Your verification code is: ${otp}`);
      } else {
        throw new Error("Invalid verification method");
      }
    }
  }catch (error) {
    throw new Error("failed to send otp");
  }
    response.status(200).json({
      success: true,  
    })   
    



    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JSON_WEB_TOKEN_SECRET_KEY
    )

    return response.status(200).json({
      sucess: true,
      erroe: false,
      message: "User registered",
      token: token,
    });

  } catch (error) {
    console.error('Registration Error:', error);
    return response.status(500).json({ message: 'Server error. Please try again later.' });
  }

}


export async function verifyEmailController(request, response) {
  const { email, code } = request.body;



  // Validate input
  // if (!email || !otp) {
  //   return response.status(400).json({
  //     success: false,
  //     error: true,
  //     message: "Please provide both email and OTP.",
  //   });
  // }

  try {
    // Find user by email
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return response.status(404).json({
        success: false,
        error: true,
        message: "User not found",
      });
    }
 

    // Mark email as verified and clear OTP
    const isCodeValid = user.otp === code;
    const isCodeExpired = user.otpExpires > Date.now();


    if (!isCodeValid || !isCodeExpired) {
      user.verify_email = true;
      user.otp = null;
      user.otpExpires = null;

      await user.save();
       return response.status(200).json({
      success: true,
      error: false,
      message: "Email verified successfully",
    });
    }else if(!isCodeValid){
      return response.status(400).json({
        success: false,
        error: true,
        message: "Invalid OTP",
      });
    }else{
      return response.status(400).json({
        success: false,
        error: true,
        message: "OTP has expired",
      });
    }

   

  } catch (error) {
    console.error("Email Verification Error:", error);
    return response.status(500).json({
      message: error.message || error,
      success: false,
      error: true,

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

   if (!user || user.status !== "Active") {
      return response.status(404).json({
        message: "User not found",
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
      secure : true,
      sameSite: 'None'
    }
    response.cookie('refreshToken', refreshtoken, cookieOption)
    response.cookie('accessToken', accesstoken, cookieOption)


     const updateUser = await UserModel.findByIdAndUpdate(user?._id,{
      last_login_date: new Date()
    })
     

    return response.status(200).json({
      success: true,
      error: false,
      message: "Login successful",
      data:{
        accesstoken,
        refreshtoken,
      }
    });

  } catch (error) {
    console.error('Login Error:', error);
    return response.status(500).json({ message: 'Server error. Please try again later.' });
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

