import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginMERN = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5005/login', formData);
      if (res.data.success) {
        alert('Login successful');
        navigate('/GetReg');
      }
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
  type="email"
  name="email"
  placeholder="Email"
  onChange={handleChange}
/>

<input
  type="password"
  name="password"
  placeholder="Password"
  onChange={handleChange}
/>
      <button>Login</button>
      <Link to="/Register">Register</Link>
    </form>
  );
};

export default LoginMERN;
