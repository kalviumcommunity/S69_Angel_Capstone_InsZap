import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/Logo.png"; 
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    phone: '',
    password: '',
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
    console.log(form); // Replace with actual API logic
  };

  const handleForgotPassword = () => {
    console.log('Redirecting to Forgot Password page');
    navigate('/forgotpassword');
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
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Email Address :</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded bg-[#294045] text-white"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div>
            <label>Phone Number :</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded bg-[#294045] text-white"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div>
            <label>Password :</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded bg-[#294045] text-white"
              placeholder="Enter Password"
              required
            />
          </div>
          <p className="text-sm text-right">
            <span onClick={handleForgotPassword} className="underline cursor-pointer">
              Forgot Password?
            </span>
          </p>
          <button
            type="submit"
            className="bg-[#032030] px-6 py-2 rounded text-white font-medium hover:bg-[#053344]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;