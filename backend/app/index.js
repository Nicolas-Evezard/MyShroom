const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Utilisation du middleware CORS
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

app.use(express.json());

// Liaison avec les routeurs
const router = require("./router");
app.use(router);

module.exports = app;
