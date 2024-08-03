const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen(8000, () => {
    console.log("Servidor on: http://localhost:8000");
})