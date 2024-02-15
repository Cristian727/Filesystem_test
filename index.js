const express = require('express')

const app = express()

app.get("/hola", (req, res) => {
    res.send("Hola mundo")
})

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
})