import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from "../assets/Logo.png";
import './StationDetailsPage.css';

const StationDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const station = location.state?.station || { name: 'Unknown', chargerTypes: [], location: 'Unknown', availability: 'Unknown' };

  const handleNavigate = () => {
    if (station.location) {
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(station.location)}`;
      window.open(googleMapsUrl, '_blank');
    } else {
      alert('Location data is missing for this station.');
    }
  };

  const handleReserve = () => {
    if (station.availability === 'Available') {
      navigate('/payments', { state: { station } }); // Navigate to payments page
    } else {
      alert(`Sorry, ${station.name} is not available for reservation.`);
    }
  };

  return (
    <div className="station-details-page">
      <div className="left-section">
        <img src={logo} alt="Inszap Logo" className="logo" />
        <p className="description">
          Inszap is your one-stop solution for seamless EV charging. Find, connect, and pay at any charging station across India — all from a single platform. Get real-time availability and a hassle-free charging experience. Power. Connect. Go.
        </p>
        <h2 className="tagline">Power Up with Inszap!</h2>
      </div>

      <div className="right-section">
        <h2 className="station-heading">Station Details</h2>
        <div className="station-card">
          <h3 className="station-name">{station.name}</h3>

          <div className="station-info">
            <p className="label">Charger types available:</p>
            <ul className="charger-list">
              {station.chargerTypes.map((type, index) => (
                <li key={index} className="charger-item">• {type}</li>
              ))}
            </ul>
          </div>

          <div className="station-info">
            <p className="label">Availability Status:</p>
            <span className={`availability-badge ${station.availability === 'Available' ? 'available' : 'not-available'}`}>
              {station.availability}
            </span>
          </div>

          <div className="button-group">
            <button
              onClick={handleReserve}
              className="action-button reserve-button"
              disabled={station.availability !== 'Available'}
            >
              Reserve
            </button>
            <button
              onClick={handleNavigate}
              className="action-button navigate-button"
            >
              Navigate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationDetailsPage;