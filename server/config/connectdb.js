import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

if (!process.env.MONGODB_URL) {
    throw new Error("MONGODB_URL is not set in environment variables.");
}

async function connectDB() {
    try{
      await mongoose.connect(process.env.MONGODB_URL);
        console.log("connect DB")
    }catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); // Exit process on failure
}
    
}
export default connectDB