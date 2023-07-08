const router = require('express').Router();
const routes = require('./routes');
app.use(routes);

// Import routes
const apiRoutes = require('./api'); // Includes all the api related routes
const homeRoutes = require('./homeRoutes'); // Include all home related routes

// Define the routes usage
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;

