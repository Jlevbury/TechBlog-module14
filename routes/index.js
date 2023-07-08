const express = require('express');
const router = express.Router();

// Import routes
const blogPostRoutes = require('./api/blogPostRoutes');

// Define the routes usage
router.use('/api', blogPostRoutes);

router.get("/", (req, res) => {
    res.render("homepage");
  });
  
module.exports = router;
