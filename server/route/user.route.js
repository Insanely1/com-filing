import {Router} from 'express';
import { loginUserController, logoutUserController, registerUserController, verifyEmailController } from '../controllers/user.controllers.js';
import authMiddleware from '../middlewares/authmiddleware.js';

const userRouter = Router()

//await axios.post('http://localhost:8000/api/user/register', formFields);
userRouter .post('/register', registerUserController); // Register user
userRouter.post('/verifyEmail',verifyEmailController);
userRouter.post('/login', loginUserController);
userRouter.get('/logout' ,authMiddleware,logoutUserController ) ;// Assuming login is handled by the same controller for now

export default userRouter