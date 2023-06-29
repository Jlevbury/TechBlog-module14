const express = require('express');
const router = express.Router();
const { BlogPost } = require('./blogPostRoutes');

// Define your routes here
// Create a new blog post
router.post('/blogposts', async (req, res) => {
    try {
      const { title, content } = req.body;
  
      // Create the blog post using the BlogPost model
      const blogPost = await BlogPost.create({ title, content });
  
      res.status(201).json(blogPost);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
module.exports = router;