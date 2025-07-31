const mongoose = require('mongoose')
const capacitacionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rol: { type: String, required: true },
  sector: String,
  edad: String,
  curso: String,
  fecha: { type: Date, default: Date.now }
})
module.exports = mongoose.model('Capacitacion', capacitacionSchema)
