import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/Logo.png"; 
import './forgotpassword.css';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter your email address.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/users/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Password reset link sent! Redirecting to reset page.');
        navigate('/create-new-password'); // Redirect to Create New Password page
      } else {
        alert(data.message || 'Failed to send reset link.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex text-white">
      {/* Left Panel */}
      <div className="left-panel bg-[#04364A] p-12 flex flex-col justify-center">
        <img src={logo} alt="Inszap Logo" className="logo"/>
        <p className="text-lg leading-relaxed">
          Inszap is your one-stop solution for seamless EV charging. Find,
          connect, and pay at any charging station across India — all from a
          single platform. Get real-time availability and a hassle-free charging
          experience. Power. Connect. Go.
        </p>
        <h2 className="mt-10 text-xl font-bold">Power Up with Inszap!</h2>
      </div>

      {/* Right Panel */}
      <div className="right-panel bg-[#1C2B32] p-12 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-6">Forgot Password?</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Email Address :</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded bg-[#294045] text-white"
              placeholder="Enter your email address"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#032030] px-6 py-2 rounded text-white font-medium hover:bg-[#053344]"
          >
            Send Reset Link
          </button>
          <p className="text-sm mt-2">
            <span onClick={handleBackToLogin} className="underline cursor-pointer">
              Go back to Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;