import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/Logo.png"; 
import './signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);

    // Basic validation
    if (!form.name || !form.email || !form.phone || !form.password || !form.confirmPassword || !form.termsAccepted) {
      console.log('Validation failed: Missing fields or terms not accepted');
      alert('Please fill all fields and accept the terms.');
      return;
    }
    if (form.password !== form.confirmPassword) {
      console.log('Validation failed: Passwords do not match');
      alert('Passwords do not match.');
      return;
    }

    // Simulate successful signup (replace with actual API call)
    console.log('Signup successful, redirecting to /login');
    navigate('/login'); // Redirect to login page
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
        <h2 className="text-2xl font-semibold mb-6">Signup</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Full Name :</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded bg-[#294045] text-white"
              placeholder="Enter your full name"
              required
            />
          </div>
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
          <div>
            <label>Confirm Password :</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded bg-[#294045] text-white"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={form.termsAccepted}
              onChange={handleChange}
              className="mr-2"
            />
            <label>I agree to the terms and privacy policy</label>
          </div>
          <button
            type="submit"
            className="bg-[#032030] px-6 py-2 rounded text-white font-medium hover:bg-[#053344]"
          >
            Signup
          </button>
          <p className="text-sm mt-2">
            Already have an account?{' '}
            <a href="/login" className="underline">
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;