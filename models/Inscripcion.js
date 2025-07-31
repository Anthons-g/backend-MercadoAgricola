const mongoose = require('mongoose');

const inscripcionSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true },
  sector: { type: String, required: true },
  edad: { type: String, required: true },
  curso: { type: String, required: true },
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Inscripcion', inscripcionSchema);
