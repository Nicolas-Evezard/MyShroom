const express = require('express');
const router = express.Router();

const weatherRoutes = require('./weatherRoutes');
const databaseRoutes = require('./databaseRoutes');

router.use('/weather', weatherRoutes);
router.use('/database', databaseRoutes);

module.exports = router;