require('dotenv').config();

const express = require('express');
var cors = require('cors');
const { dbConnection } = require('./database/config')

// ** Se crea el servidor de express **//
const app = express();

app.use(cors());

// Lectura y parseo de body
app.use(express.json());

//DB CONNECTION
dbConnection();

app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: "Hola mundo"
    })
});

//Rutas
app.use('/api/usuarios', require('./routes/usuarios'));

app.listen(3000, () => { console.log('server run puerto 3000')});