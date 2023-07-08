const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Import routes
const blogPostRoutes = require('./api/blogPostRoutes');

// Define the routes usage
router.use('/api', blogPostRoutes);

// Homepage route
router.get("/", (req, res) => {
    res.render("homepage");
});

// Signup route
router.get('/auth/signup', (req, res) => {
    res.render("signup");
});
router.post('/auth/signup', async (req, res) => {
    // Handle signup POST request here
    try {
      const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      });
  
      req.session.save(() => {
        req.session.user_id = newUser.id;
        req.session.logged_in = true;
        
        res.status(200).json(newUser);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

// Login route
router.get('/auth/login', (req, res) => {
    res.render("login");
});
router.post('/auth/login', async (req, res) => {
    // Handle login POST request here
    console.log(req.body);
    try {
        const dbUserData = await User.findOne({
            where: {
              username: req.body.username,  // Use 'username' here instead of 'email'
            },
          });
  
      if (!dbUserData) {
        res.status(400).json({ message: 'No user account found!' });
        return;
      }
  
      const validPassword = await dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.logged_in = true;
        
        res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  
  router.post('/auth/logout', (req, res) => {
    // Handle logout POST request here
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
// Dashboard route
router.get('/dashboard', (req, res) => {
    res.render("dashboard");
});

router.get('/profile', (req, res) => {
    res.render("profile");
});
module.exports = router;
