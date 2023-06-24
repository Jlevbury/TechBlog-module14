// Import dependencies
const express = require('express');
const exphbs = require('express-handlebars');

// Create an Express app
const app = express();

// Configure Handlebars as the template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set the path to your views directory (where your Handlebars templates will reside)
app.set('views', path.join(__dirname, 'views'));

// Set up your routes and other middleware here
// Define a route to render the index view
app.get('/', (req, res) => {
    res.render('index');
  });
  
// Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
