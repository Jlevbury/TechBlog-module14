const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const path = require('path');

// Import your routes here
const authRoutes = require('./routes/index');
const { BlogPost } = require('./models/blogPost'); // Import the BlogPost model

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars as the template engine
app.engine(
  'handlebars',
  exphbs.engine({
    defaultLayout: 'main',
    helpers: {
      // Helper function to format dates
      formatDate: function (date) {
        return new Date(date).toLocaleDateString();
      },
    },
  })
);

app.set('view engine', 'handlebars');

// Set up the static directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up session middleware
app.use(
  session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
  })
);

// Set up your routes here
app.use('/auth', authRoutes);

// Homepage route
app.get('/', async (req, res) => {
  try {
    // Fetch existing blog posts from the database
    const blogPosts = await BlogPost.findAll({});

    res.render('homepage', { blogPosts, authenticated: req.session.authenticated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
