import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const FormMERN = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', gender: '', password: ''
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5005/users', formData);
    alert('Registered successfully');
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <input
  type="text"
  name="firstName"
  placeholder="First Name"
  onChange={handleChange}
/>

<input
  type="text"
  name="lastName"
  placeholder="Last Name"
  onChange={handleChange}
/>

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

<div className="gender-group">
  <label>
    <input type="radio" name="gender" value="male" onChange={handleChange} />
    Male
  </label>

  <label>
    <input type="radio" name="gender" value="female" onChange={handleChange} />
    Female
  </label>
</div>

      <button>Register</button>
      <Link to="/">Login</Link>
    </form>
  );
};

export default FormMERN;
