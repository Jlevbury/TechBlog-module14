const router = require('express').Router();

// Import routes
const userRoutes = require('./userRoutes');
const blogPostRoutes = require('./blogPostRoutes');
const signup = require("./signUp");
const comment = require("./comment");
// Define the routes usage
router.use('/', userRoutes); 
router.use('/posts', blogPostRoutes); 
router.use('/signup', signup);
router.use("/comment", comment);
module.exports = router;
