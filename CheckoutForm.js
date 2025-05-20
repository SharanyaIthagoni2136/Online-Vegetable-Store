// CheckoutForm.js
import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import { useNavigate } from 'react-router-dom';

export default function CheckoutForm({ onCancel }) {
  const { items, cartTotal, emptyCart } = useCart();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();

  // Send data to Google Apps Script
  fetch("https://script.google.com/macros/s/AKfycbw0XZZcVGdkhk_4F4UV5s4WG8mVEtPElIJB22fPc4mGthTqZnUEcvX9bf5c1jIvPFBNSw/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      location,
      address,
      phone,
      items,
    }),
  })
    .then(() => {
      alert("Submitted!");
      emptyCart();
      navigate('/confirmation');
    })
    .catch((error) => {
      console.error("Submission failed:", error);
      alert("Failed to submit. Please try again.");
    });
};



  return (
    <form onSubmit={handleSubmit} className="container mt-5">
      <h2 className="mb-4 text-center">Checkout Form</h2>

      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password:</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Location:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your city"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Phone:</label>
        <input
          type="tel"
          className="form-control"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Address:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Full delivery address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>

      <p className="fw-bold">Total: ₹{cartTotal.toFixed(2)}</p>

      <div className="d-flex gap-3">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => onCancel && onCancel()}
        >
          Back to Cart
        </button>
        <button type="submit" className="btn btn-success">
          Confirm Order
        </button>
      </div>
    </form>
  );
}
