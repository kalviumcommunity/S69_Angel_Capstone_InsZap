import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/Logo.png"; 
import './adduser.css';

const AddUser = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    carModel: '',
    chargingType: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    navigate('/userProfilePage1');
  };

  const handleSave = async () => {
    if (!form.name || !form.carModel || !form.chargingType) {
      alert('Please fill all fields.');
      return;
    }

    if (isSubmitting) return;
    setIsSubmitting(true);

    console.log('Sending data:', form);
    try {
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      console.log('Response:', response.status, data);
      if (response.ok) {
        alert('User added successfully!');
        navigate('/userProfilePage1');
      } else {
        alert(`Failed to add user: ${data.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Fetch error:', error.message);
      alert('An error occurred. Please check the console for details.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex text-white">
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
      <div className="right-panel bg-[#1C2B32] p-12 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-6">Add User</h2>
        <form className="space-y-4">
          <div>
            <label>User Name:</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded bg-[#294045] text-white"
              placeholder="Enter user name"
              required
            />
          </div>
          <div>
            <label>Car Model:</label>
            <select
              name="carModel"
              value={form.carModel}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded bg-[#294045] text-white"
              required
            >
              <option value="" disabled>Select car model</option>
              <option value="Tata Nexon EV">Tata Nexon EV</option>
              <option value="MG ZS EV">MG ZS EV</option>
              <option value="Tata Tigor EV">Tata Tigor EV</option>
            </select>
          </div>
          <div>
            <label>Charging Type:</label>
            <select
              name="chargingType"
              value={form.chargingType}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded bg-[#294045] text-white"
              required
            >
              <option value="" disabled>Select charging type</option>
              <option value="Type 2 AC">Type 2 AC</option>
              <option value="GB/T">GB/T</option>
              <option value="CCS">CCS</option>
            </select>
          </div>
          <div className="button-group">
            <button
              type="button"
              onClick={handleCancel}
              className="cancel-btn"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="save-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;