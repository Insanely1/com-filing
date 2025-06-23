import mongoose from "mongoose";
import bcrypt from "bcryptjs";



const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
    phone: {
      type: String,
      required: [true, "Please provide a phone number"],
    },
    avatar: {
      type: String,
      default: "",
    },
   
    verify_email: {
      type: Boolean,
      default: false,
    },
    last_login_status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
    status:{
       type: String,
       enum: ["Active", "Inactive", "Blocked"],
        default: "Active",
}  ,
  forget_password_otp: {
      type: String,
      default: "",
    },
    forget_password_otp_expires: {
      type: Date,
      default: null,
    },
    otp: {
      type: String,
      default: "",
    },
    otpExpires: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);
userSchema.pre("save", function (next) {
  if(!this.isModified("password")) {
  next();}
  this.password = bcrypt.hashSync(this.password, 10);
});

userSchema.methods.comparePassword = async function (enteredpassword) {
  return bcrypt.compareSync(password, this.password);
};


const UserModel = mongoose.model("User", userSchema);

export default UserModel;
