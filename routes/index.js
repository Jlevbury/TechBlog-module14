const router = require('express').Router();
const routes = require('../routes');
app.use(routes);

// Import routes
const apiRoutes = require('./api'); 
const homeRoutes = require('./homeRoutes'); 

// Define the routes usage
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;

