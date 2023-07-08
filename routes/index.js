const express = require('express');
const router = express.Router();

// Import routes
const userRoutes = require('./userRoutes');
const blogPostRoutes = require('./blogPostRoutes');

// Define the routes usage
router.use('/api/auth', userRoutes);
router.use('/api/posts', blogPostRoutes);

module.exports = router;
