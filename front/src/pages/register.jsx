
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [verifying, setVerifying] = useState(false);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await axios.post('http://localhost:8000/api/user/register', formFields ,   { withCredentials: true });
      if (res.data.success) {
        setMessage('Signup successful! Please verify your email.');
        setShowOtp(true);
      } else {
        setMessage(res.data.message);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Signup failed. Try again.');
    }
  };

  const handleVerify = async () => {
    setVerifying(true);
    setMessage('');

    try {
      const res = await axios.post('http://localhost:8000/api/user/verifyEmail', {
        email: formFields.email,
        code: otp.toString(),
      });

      if (res.data.success) {
        setMessage('✅ Email verified successfully! You can now sign in.');
        setShowOtp(false);
      } else {
        setMessage(res.data.message || 'Verification failed.');
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Verification failed.');
    }
    setVerifying(false);
  };

  return (
    <div>
      <br />
      <br />
      <section className="signUpPage py-10">
        <div className="container mx-auto max-w-md">
          <div className="card p-6 shadow-lg border rounded-lg bg-white">
            <div className="text-center mb-4">
              <img src="logo.png" alt="Logo" className="mx-auto w-24" />
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <h2 className="text-2xl font-semibold text-center">Register for a new account</h2>

              <TextField
                label="Name"
                type="text"
                name="name"
                variant="outlined"
                fullWidth
                required
                onChange={onChangeInput}
              />

              <TextField
                label="Email Id"
                type="email"
                name="email"
                variant="standard"
                fullWidth
                required
                onChange={onChangeInput}
              />

              <TextField
                label="Password"
                type="password"
                name="password"
                variant="standard"
                fullWidth
                required
                onChange={onChangeInput}
              />

              <div className="flex justify-between items-center mt-4">
                <Button type="submit" variant="contained" color="primary">
                  Sign Up
                </Button>
                <Button component={Link} to="/" variant="outlined" color="secondary">
                  Cancel
                </Button>
              </div>

              {message && <p className="text-center text-sm text-gray-700">{message}</p>}

              <p className="text-center">
                Already Registered?{' '}
                <Link to="/signIn" className="text-blue-600 underline">
                  Sign In
                </Link>
              </p>

              <h3 className="text-center font-medium mt-6">Or continue with social account</h3>

              <Button variant="outlined" className="text-center mb-4 justify-between">
                <img src="googleimg.png" className="w-80" alt="Google Login" />
              </Button>
            </form>

            {showOtp && (
              <div className="mt-4 space-y-2">
                <TextField
                  label="Enter OTP"
                  type="text"
                  variant="outlined"
                  fullWidth
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleVerify}
                  disabled={verifying}
                >
                  {verifying ? 'Verifying...' : 'Verify Email'}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
