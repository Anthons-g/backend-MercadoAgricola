const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Producto = require('./models/Product');
const productos = require('./productos.json');

dotenv.config();

const cargar = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Producto.deleteMany(); 

    await Producto.insertMany(productos);
    console.log('✅ Productos insertados correctamente');
    process.exit();
  } catch (error) {
    console.error('❌ Error al insertar productos:', error.message);
    process.exit(1);
  }
};

cargar();
