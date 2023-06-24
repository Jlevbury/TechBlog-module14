const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const exphbs = require('express-handlebars');


// Sign up route
router.get('/signup', (req, res) => {
  res.render('signup');
});

router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    await User.create({ username, email, password: hashedPassword });

    res.redirect('/auth/login');
  } catch (error) {
    console.log(error);
    res.render('signup', { error: 'An error occurred during sign up.' });
  }
});

// Login route
router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.render('login', { error: 'Invalid username or password.' });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.render('login', { error: 'Invalid username or password.' });
    }

    // Set the user's session
    req.session.userId = user.id;

    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.render('login', { error: 'An error occurred during login.' });
  }
});

// Logout route
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
