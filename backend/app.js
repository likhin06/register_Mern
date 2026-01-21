const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/users');

mongoose.connection.on('open', () => {
  console.log('Connected to MongoDB');
});

// Schema
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  gender: String,
  password: String,
});

const User = mongoose.model('User', UserSchema);

// Register API
app.post('/users', async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all users
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Login API
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: 'Invalid email' });

  if (password !== user.password)
    return res.status(401).json({ message: 'Invalid password' });

  res.json({ success: true });
});

app.listen(5005, () => {
  console.log('Server running on port 5005');
});
