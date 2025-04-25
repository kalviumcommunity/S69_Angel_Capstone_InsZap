const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Get user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) res.status(404).send('User not found');
    res.json(user);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// POST endpoint to create a new user (signup)
router.post('/signup', async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    // Basic validation
    if (!name || !email || !phone || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Respond with success message
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;