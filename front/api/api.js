import axios from 'axios';
import { registerUser, loginUser } from '../api/api';

// Create an axios instance with your backend base URL
const API = axios.create({
  baseURL: 'http://localhost:8000/api/user',
  withCredentials: true, // send cookies if needed (for httpOnly tokens)
});

// Register user
export const registerUser = (formData) => API.post('/register', formData);

// Login user
export const loginUser = (credentials) => API.post('/login', credentials);

// Logout user
export const logoutUser = () => API.get('/logout');

// Optionally, add verify email if you have that endpoint
export const verifyEmail = (data) => API.post('/verifyEmail', data);

// Register example
const handleRegister = async (formFields) => {
  const res = await registerUser(formFields);
  // handle response
};

// Login example
const handleLogin = async (credentials) => {
  const res = await loginUser(credentials);
  // handle response
};

export default API;
