const router = require('express').Router();

// Import routes
const userRoutes = require('./userRoutes');
const blogPostRoutes = require('./blogPostRoutes');
const signup = require("./signUp");
// Define the routes usage
router.use('/', userRoutes); 
router.use('/posts', blogPostRoutes); 
router.use('/signup', signup);
module.exports = router;
