const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const path = require('path');

// Import your routes here
const authRoutes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars as the template engine
app.engine('handlebars', exphbs());

app.set('view engine', 'handlebars');

// Set up the static directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up session middleware
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false,
}));

// Set up your routes here
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
