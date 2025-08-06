import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import connectDB from './config/connectdb.js';
import userRouter from "./route/user.route.js";
import { errorMiddleware } from './middlewares/error.js';

const app = express();   // <-- IMPORTANT: define app FIRST

const allowedOrigins = ['http://localhost:5173', 'http://localhost:3000'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(helmet({
  crossOriginEmbedderPolicy: false,
}));

app.get("/", (request, response) => {
  response.json({
    message: "server is running on port " + process.env.PORT,
  });
});

app.use('/api/user', userRouter);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server is running on port", process.env.PORT);
  });
}).catch((error) => {
  console.error("Database connection failed:", error);
  process.exit(1);
});

// Handle errors
app.use(errorMiddleware);
