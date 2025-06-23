import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {  useState } from 'react';
import axios from 'axios';


const Register = () => {

  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  console.log(formFields);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:8000/api/user/signup', formFields);
      if (res.data.success) {
        setMessage('Signup successful! Please verify your email.');
        // Optionally navigate to /verify or show input for OTP here
      } else {
        setMessage(res.data.message);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Signup failed. Try again.');
    }
  };


  return (
    <div> 
        <br/>
        <br/>
    <section className="signUpPage py-10">
      <div className="container mx-auto max-w-md">
        <div className="card p-6 shadow-lg border rounded-lg bg-white">
          <div className="text-center mb-4">
            <img src="logo.png" alt="Logo" className="mx-auto w-24" />
          </div>

          <form
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-semibold text-center">Register for a new account</h2>

            <TextField
              label="Name"
              type="text"
              id="name"
              name="name"
              variant="outlined"
              fullWidth
              required
              onChange={onChangeInput}             
            />

            <TextField
              label="Email Id"
              type="email"
              id="email"
              name="email"
              variant="standard"
              fullWidth
              required
              onChange={onChangeInput}
            />

            <TextField
              label="Password"
              type="password"
              variant="standard"
              name="password"
              fullWidth
              required
              onChange={onChangeInput}
            />

            <br/>
            <br/>

            <div className="flex justify-between items-center">
              <Button type="submit" variant="contained" color="primary">
                Sign Up
              </Button>
              <Button
                component={Link}
                to="/"
                variant="outlined"
                color="secondary"
              >
                Cancel
              </Button>
            </div>

            <p className="text-center">
              Already Registered?{' '}
              <Link to="/signIn" className="text-blue-600 underline">
                Sign In
              </Link>
            </p>

            <h3 className="text-center font-medium mt-6">
              Or continue with social account
            </h3>

            <Button variant="outlined" className="text-center mb-4 justify-between">
              <img src="googleimg.png" className="w-80" alt="Google Login" />
            </Button>
          </form>
        </div>
      </div>
    </section>

    </div>
  );
};

export default Register;



