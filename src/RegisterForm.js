import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import AdvertisementCarousel from './AdvertisementCarousel';
import VerticalCarousel from './VerticalCarousel';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('User registered successfully');
        setFormData({ name: '', email: '', password: '' });
      } else {
        throw new Error('Failed to register user');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while registering the user');
    }
  };

  return (
    <div className="register-page">
      {/* Carrusel Horizontal */}
      <AdvertisementCarousel />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {/* Formulario de Registro */}
            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
              <form className="p-4 bg-white rounded shadow-sm" onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
                <h2 className="mb-4">Register</h2>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            {/* Carrusel Vertical */}
            <VerticalCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
