import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/Logo.png"; 
import './createNewPassword.css';

const CreateNewPassword = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.password || !form.confirmPassword) {
      alert('Please fill all fields.');
      return;
    }
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Simulate password reset (replace with actual API call)
    console.log('Password reset successful:', form);
    alert('Password reset successful! Please log in.');
    navigate('/login'); // Redirect to login page
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
        <h2 className="text-2xl font-semibold mb-6">Create New Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Enter Password :</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded bg-[#294045] text-white"
              placeholder="Enter new password"
              required
            />
          </div>
          <div>
            <label>Confirm Password :</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded bg-[#294045] text-white"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#032030] px-6 py-2 rounded text-white font-medium hover:bg-[#053344]"
          >
            Create New Password
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

export default CreateNewPassword;