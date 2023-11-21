const path = require('path');

// import du module Express
const express = require("express");

// déclaration de notre app Express
const app = express();

app.use(express.json());

// Liaison avec les routeurs
const router = require("./router");
app.use(router);

module.exports = app;