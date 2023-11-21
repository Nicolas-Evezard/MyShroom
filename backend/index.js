const express = require('express');
const app = express();

// Middleware pour parser le JSON des requêtes
app.use(express.json());

// Routes
const indexRouters = require('./src/routes/indexRouters');

app.use('/api', indexRouters);


// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
