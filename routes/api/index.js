const router = require('express').Router();

// Import routes
const userRoutes = require('./userRoutes');
const blogPostRoutes = require('./blogPostRoutes');

// Define the routes usage
router.use('/auth', userRoutes); // No need of '/api' prefix here
router.use('/posts', blogPostRoutes); // No need of '/api' prefix here

module.exports = router;
