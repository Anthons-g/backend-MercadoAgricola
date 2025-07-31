const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true, trim: true },
  categoria: { type: String, required: true },
  descripcion: { type: String, default: 'Producto institucional' },
  tipo: String,
  subtipo: String,
  presentaciones: String,
  modoDeUso: String,
  imagen: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true, min: 0 }, 
  disponible: { type: Boolean, default: true }
    
}, {
  timestamps: true
});


module.exports = mongoose.model('Producto', productoSchema);
