const http = require("http");

const app = require('../app');

const server = http.createServer(app);

const mongoose = require('mongoose');

//mongoose.connect('mongodb://127.0.0.1/Llatan');

mongoose.connect('mongodb+srv://christopher:Christopher2312@cluster0.7cixd.mongodb.net/Llatan');

server.listen(3000);

server.on('listening', () =>  {
    console.log('El servidor esta corriendo en el puerto 3000');
} )