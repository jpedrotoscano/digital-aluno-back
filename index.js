const express = require("express");
const cors = require("cors");

const vagasRoutes = require("./src/routes/vagasRoutes");
const desafiosRoutes = require("./src/routes/desafiosRoutes")

const app = express();

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello World");
})

// ROTAS PROTEGIDAS
app.use("/vagas", vagasRoutes);
app.use("/desafios", desafiosRoutes)


app.listen(8000, () => {
    console.log("Servidor on: http://localhost:8000");
})