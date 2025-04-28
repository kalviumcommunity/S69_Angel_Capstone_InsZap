import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from "../assets/Logo.png";
import upiIcon from "../assets/UPI.png";
import cardIcon from "../assets/Card.png";
import bankIcon from "../assets/netbanking.png";
import './PaymentsPage.css';

const PaymentsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const station = location.state?.station || { name: 'Unknown' };
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentInput, setPaymentInput] = useState(''); // For UPI ID or card details

  const handlePayment = () => {
    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }
    if (!paymentInput) {
      alert('Please enter your ' + (paymentMethod === 'UPI' ? 'UPI ID' : 'card details') + '.');
      return;
    }
    // Mock payment processing
    alert(`Payment successful for reserving a spot at ${station.name} using ${paymentMethod} with ${paymentInput}!`);
    navigate('/dashboard');
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
        <div className="header-section">
          <h2 className="payment-heading">Payment</h2>
          <div className="nav-links flex justify-center gap-6 mb-6">
            <button onClick={() => navigate('/dashboard')} className="nav-link">Dashboard</button>
            <button onClick={() => navigate('/station-details', { state: { station } })} className="nav-link">Station Details</button>
            <button onClick={() => navigate('/payment-history')} className="nav-link">Payment History</button>
          </div>
        </div>
        <div className="payment-card">
          <h3 className="text-sm font-semibold mb-3">PAYMENT METHODS:</h3>
          <div className="payment-methods space-y-2">
            <button
              className={`payment-option flex items-center ${paymentMethod === 'UPI' ? 'selected' : ''}`}
              onClick={() => { setPaymentMethod('UPI'); setPaymentInput(''); }}
            >
              <img src={upiIcon} alt="UPI" className="payment-icon" />
              <span className="payment-text">UPI</span>
            </button>
            <button
              className={`payment-option flex items-center ${paymentMethod === 'Credit/Debit Card' ? 'selected' : ''}`}
              onClick={() => { setPaymentMethod('Credit/Debit Card'); setPaymentInput(''); }}
            >
              <img src={cardIcon} alt="Card" className="payment-icon" />
              <span className="payment-text">Credit/Debit Card</span>
            </button>
            <button
              className={`payment-option flex items-center ${paymentMethod === 'Net Banking' ? 'selected' : ''}`}
              onClick={() => { setPaymentMethod('Net Banking'); setPaymentInput(''); }}
            >
              <img src={bankIcon} alt="Bank" className="payment-icon" />
              <span className="payment-text">Net Banking</span>
            </button>
          </div>
          {paymentMethod && (
            <div className="payment-input mt-4">
              <input
                type={paymentMethod === 'Credit/Debit Card' ? 'text' : 'text'}
                placeholder={paymentMethod === 'UPI' ? 'Enter UPI ID (e.g., user@bank)' : paymentMethod === 'Credit/Debit Card' ? 'Enter card number' : 'Enter account details'}
                value={paymentInput}
                onChange={(e) => setPaymentInput(e.target.value)}
                className="w-full p-2 rounded bg-[#3a4b52] text-white border-none"
              />
            </div>
          )}
          <button
            onClick={handlePayment}
            className="pay-now-btn mt-4"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;