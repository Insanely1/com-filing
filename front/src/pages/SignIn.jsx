

import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const SignIn = () => {
  useEffect(() => {
    // future logic
  }, []);

  return (
    <section className="signInPage py-10 ">
       <br/>
        <br/>
      <div className="container mx-auto max-w-md">
        <div className="card p-6 shadow-lg border rounded-lg bg-white">
          <div className="text-center mb-4">
            <img src="logo.png" alt="Logo" className="mx-auto w-24" />
          </div>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              // handle sign-in logic here
            }}
          >
            <h2 className="text-2xl font-semibold text-center">Sign In</h2>

            <TextField
              label="Email"
              type="email"
              variant="standard"
              fullWidth
              required
            />

            <TextField
              label="Password"
              type="password"
              variant="standard"
              fullWidth
              required
            />

            <div className="text-right text-sm text-blue-600 hover:underline cursor-pointer">
              Forget Password
            </div>

            <div className="flex justify-between items-center">
              <Button type="submit" variant="contained" color="primary">
                Sign In
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
              Not Registered?{' '}
              <Link to="/signUp" className="text-blue-600 underline">
                Sign Up
              </Link>
            </p>

            <h3 className="text-center font-medium mt-6">
              Or continue with social account
            </h3>

            <Button variant="outlined text-center mb-4 justfy-between" >
              <img src="googleimg.png"  className="w-80" />
              
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;

