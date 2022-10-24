const express = require('express')
const Contenedor = require('./contenedor')

const app = express()
const productos = new Contenedor('./productos.json')

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))

app.get('/',(req, res) =>{
    res.send('<h1>Desafío 3 - NodeJS - Alumno: Lucas Cabral Silvero</h1>');
});

app.get('/productos', async (req, res) => {
    const prods = await productos.getAll()
    res.send(prods)
})

app.get('/productosRandom', async (req, res) => {
    const prods = await productos.getAll()
    const randomId = parseInt(Math.random() * prods.length)
    console.log(randomId)
    res.send(prods[randomId])
})