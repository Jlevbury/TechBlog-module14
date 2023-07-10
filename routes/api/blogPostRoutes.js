const router = require('express').Router();
const { Blog } = require('../../models');  
const withAuth = require('../../utils/auth');

router.post('/',  async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id
    });
    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/',  async (req, res) => {
  try {
    const blogPostsData = await Blog.findAll({
      where: {
        user_id: req.session.user_id
      }
    });

    const blogPosts = blogPostsData.map((blogPost) => blogPost.get({ plain: true }));
console.log(blogPosts);
    res.render('profile', { blogPosts, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/api/blogs/:id', async (req, res) => {
  try {
      const blog = await Blog.destroy({
          where: {
              id: req.params.id
          }
      });

      if (!blog) {
          res.status(404).json({ message: 'No blog found with this id!' });
          return;
      }

      res.status(200).json(blog);
  } catch (err) {
      res.status(500).json(err);
  }
});


module.exports = router;
