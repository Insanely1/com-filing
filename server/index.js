import express  from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import connectDB from './config/connectdb.js';
import userRouter  from "./route/user.route.js";
import { errorMiddleware } from './middlewares/error.js';


const app = express();
app.use(cors
    (
    {
        origin: process.env.CLIENT_URL || 'http://localhost:3000', // Replace with your client URL
        credentials: true, // Allow cookies to be sent
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
        allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
    }
    ));
app.options('*' , cors())


app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(helmet({
    crossOriginEmbedderPolicy:false
}))


app.get("/", (request, response) => {
    
    response.json({
        message: "server is running" + process.env.PORT
    });
});


app.use('/api/user' , userRouter);

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Server is running on port", process.env.PORT);
    });
}).catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1);
});


// Handle 404 errors
app.use(errorMiddleware)