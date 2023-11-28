const express = require("express");
const router = express.Router();

// Import du controller
const { weatherController } = require("../controller");

router.post("/",weatherController.getWeatherData);

module.exports = router;