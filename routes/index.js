const express = require('express');
const router = express.Router();
//const authRoutes = require('./authRoutes');
const blogPostRoutes = require('./blogPostRoutes');

//router.use('/auth', authRoutes);
router.use('/', blogPostRoutes);

module.exports = router;
