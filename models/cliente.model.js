const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
    nombre: { type: String, required: true},
    apellido: { type: String, required: true},
    edad: { type: Number, required: true},
    fechaNacimiento: { type: Date, required: true}
});

module.exports = mongoose.model('cliente',ClienteSchema);

