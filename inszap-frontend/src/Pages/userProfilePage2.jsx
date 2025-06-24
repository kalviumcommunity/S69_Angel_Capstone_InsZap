import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import logo from "../assets/Logo.png";
import './userProfilePage2.css';

const UserProfilePage2 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', carModel: '', chargingType: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/users/${id}`);
        const data = await response.json();
        console.log('Fetched user:', data);
        if (response.ok) {
          setUser({ name: data.name, carModel: data.carModel, chargingType: data.chargingType });
        } else {
          console.error('Failed to fetch user:', data.message);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const updatedUser = {
        name: user.name,
        carModel: user.carModel,
        chargingType: user.chargingType,
      };
      console.log('Sending updated user data:', updatedUser);
      const response = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedUser),
      });
      const data = await response.json();
      console.log('Update response:', response.status, data);
      if (response.ok) {
        alert('User updated successfully!');
        navigate('/userProfilePage1', { state: { refresh: true } });
      } else {
        alert(`Failed to update user: ${data.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error updating user:', error);
      alert('An error occurred. Please check the console.');
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex text-white">
      <div className="left-panel bg-[#04364A] p-12 flex flex-col justify-center">
        <img src={logo} alt="Inszap Logo" className="logo"/>
        <p className="text-lg leading-relaxed">Edit your profile here...</p>
      </div>
      <div className="right-panel bg-[#1C2B32] p-12 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-6">Edit User</h2>
        <form className="space-y-4">
          <div>
            <label>User Name:</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded bg-[#294045] text-white"
              required
            />
          </div>
          <div>
            <label>Car Model:</label>
            <select
              name="carModel"
              value={user.carModel}
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
              value={user.chargingType}
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
              onClick={() => navigate('/userProfilePage1')}
              className="cancel-btn"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="save-btn"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfilePage2;