const express = require('express');
const cors = require('cors');
require('./src/config/config.js')
const app = express();

app.use(cors())
app.use(express.json());

const todoRoute = require('./src/todo/todoRoutes')

app.get('/', (req, res) =>{
    res.send('Welcome to the API!');
})

app.use(todoRoute)

const port =   process.env.port

app.listen(port, ()=>{
    console.log(`This server is listening on port: ${port}`)
})