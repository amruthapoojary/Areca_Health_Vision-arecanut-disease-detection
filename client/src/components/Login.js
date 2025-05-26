import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Login.css';

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
  event.preventDefault();

  const data = { email, password };

  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Login successful');
      navigate('/scan');  // navigate only on success
    } else {
      const errorMessage = await response.text();
      alert(errorMessage);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error logging in');
  }
};

  return (
    <div className="d-flex justify-content-center align-items-center login-container" style={{ height: '100vh' }}>
      <div className="login-form p-4">
        <form onSubmit={handleSubmit}>
          <h2 className="text-center mb-4 text-white">Login</h2>
          <div className="form-group mb-3">
            <label htmlFor="email" className="text-white">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password" className="text-white">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-success w-100" type="submit">
            LOGIN
          </button>
          <p className="text-center mt-3 text-white">
            Don't have an account? <Link to="/signup" className="text-white">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
