import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from "../assets/Logo.png";
import './dashboardPage.css';

const DashboardPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user || { name: 'Unknown', carModel: 'Unknown', chargingType: 'Unknown' };
  const [searchQuery, setSearchQuery] = useState('');

  // Dummy station data
  const dummyStations = [
    {
      name: 'Indian Charging Point',
      chargerTypes: ['Type 2 AC', 'GB/T', 'CCS'], // Array of charger types
      location: 'Mumbai, India',
      availability: 'Not Available', // Add availability status
    },
    {
      name: 'Statiq',
      chargerTypes: ['GB/T'],
      location: 'Delhi, India',
      availability: 'Available',
    },
    {
      name: 'Green Charge Hub',
      chargerTypes: ['CCS'],
      location: 'Bangalore, India',
      availability: 'Available',
    },
    {
      name: 'PowerPoint',
      chargerTypes: ['Type 2 AC'],
      location: 'Chennai, India',
      availability: 'Not Available',
    },
  ];

  // Filter stations by search query
  const filteredStations = dummyStations.filter(station =>
    station.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleNavigate = (station) => {
    if (station.location) {
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(station.location)}`;
      window.open(googleMapsUrl, '_blank');
    } else {
      alert('Location data is missing for this station.');
    }
  };

  const handleStationClick = (station) => {
    navigate('/station-details', { state: { station } }); // Navigate to station details
  };

  return (
    <div className="min-h-screen flex text-white">
      <div className="left-panel bg-[#04364A] p-12 flex flex-col justify-center">
        <img src={logo} alt="Inszap Logo" className="logo" />
        <p className="text-lg leading-relaxed">
          Inszap is your one-stop solution for seamless EV charging. Find,
          connect, and pay at any charging station across India — all from a
          single platform. Get real-time availability and a hassle-free charging
          experience. Power. Connect. Go.
        </p>
        <h2 className="mt-10 text-xl font-bold">Power Up with Inszap!</h2>
      </div>
      <div className="right-panel bg-[#1C2B32] p-12 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
        <div className="user-info mb-6">
          <p>User Name: {user.name}</p>
          <p>Car Model: {user.carModel}</p>
          <p>Charging Type: {user.chargingType}</p>
        </div>
        <div className="search-bar mb-6">
          <input
            type="text"
            placeholder="Find Station"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full p-2 rounded bg-[#294045] text-white"
          />
        </div>
        <div className="stations">
          {filteredStations.length === 0 ? (
            <p>No stations found.</p>
          ) : (
            filteredStations.map((station, index) => (
              <div
                key={index}
                className="station-card cursor-pointer"
                onClick={() => handleStationClick(station)} // Add click handler
              >
                <div className="station-info">
                  <p>Station Name: {station.name}</p>
                  <p>Charger Type: {station.chargerType}</p>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); handleNavigate(station); }} // Prevent click on button from triggering navigation
                  className="navigate-btn"
                >
                  Navigate
                </button>
              </div>
            ))
          )}
        </div>
        <button
          onClick={() => navigate('/userProfilePage1')}
          className="back-btn mt-6"
        >
          Back to Profiles
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;