const express = require('express');
const cors = require('cors');
require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

// Liaison avec les routeurs
const router = require("./router");
app.use(router);

module.exports = app;
