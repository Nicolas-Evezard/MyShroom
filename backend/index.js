require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT ?? 3000;

app.listen(PORT,()=>{
    console.log(`Serveur accessible sur http://localhost:${PORT}`);
});