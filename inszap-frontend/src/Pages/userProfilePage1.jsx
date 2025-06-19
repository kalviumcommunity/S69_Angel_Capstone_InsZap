import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from "../assets/Logo.png"; 
import './userProfilePage1.css';

const UserProfilePage1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:5000/api/users');
        const data = await response.json();
        console.log('Fetched users:', data);
        if (response.ok) {
          setUsers(data);
        } else {
          console.error('Failed to fetch users:', data.message);
          setUsers([]);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [location.pathname, location.state?.refresh]); // Trigger fetch on refresh flag

  const handleEdit = (id) => {
    navigate(`/userProfilePage2/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        console.log('Deleting user with id:', id);
        const response = await fetch(`http://localhost:5000/api/users/${id}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        console.log('Delete response:', response.status, data);
        if (response.ok) {
          setUsers(users.filter(user => user._id !== id));
          console.log('User deleted:', data.message);
        } else {
          alert(data.message || 'Failed to delete user');
        }
      } catch (error) {
        console.error('Error deleting user:', error.message);
        alert('An error occurred. Please check the console for details.');
      }
    }
  };

  const handleAddUser = () => {
    navigate('/add-user');
  };

  const handleUserClick = (user) => {
    navigate('/dashboard', { state: { user } });
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
        <h2 className="text-2xl font-semibold mb-6">User Profiles</h2>
        <div className="user-profiles">
          {loading ? (
            <p>Loading users...</p>
          ) : users.length === 0 ? (
            <p>No users found.</p>
          ) : (
            users.map((user) => (
              <div
                key={user._id}
                className="user-card cursor-pointer"
                onClick={() => handleUserClick(user)}
              >
                <div className="user-info">
                  <p>User Name: {user.name}</p>
                  <p>Car Model: {user.carModel}</p>
                  <p>Charging Type: {user.chargingType}</p>
                </div>
                <div className="user-actions">
                  <button
                    onClick={(e) => { e.stopPropagation(); handleEdit(user._id); }}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleDelete(user._id); }}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <button onClick={handleAddUser} className="add-user-btn">
          Add User
        </button>
      </div>
    </div>
  );
};

export default UserProfilePage1;