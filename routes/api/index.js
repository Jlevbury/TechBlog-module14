const router = require('express').Router();

// Import routes
const userRoutes = require('./userRoutes');
const blogPostRoutes = require('./blogPostRoutes');

// Define the routes usage
router.use('/api', userRoutes); 
router.use('/posts', blogPostRoutes); 

module.exports = router;
