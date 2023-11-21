// Déclaration du routeur principal
const express = require("express");
const mainRouter = express.Router();

// Import des routeurs
const weatherRouter = require("./weather");

mainRouter.use("/weather",weatherRouter);

module.exports = mainRouter;