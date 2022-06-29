const mongoose = require('mongoose');
const Cliente = require('./models/cliente.model');

(async ()=>{
    await mongoose.connect('mongodb://127.0.0.1/Llatan');

    const newCliente = await Cliente.create({
        nombre: 'Christopher',
        apellido: 'Aguilar',
        edad: 35,
        fechaNacimiento: '1987-12-23'
    });

    console.log(newCliente);
})();