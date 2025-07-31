// 🦐 Seed institucional para productos de Larvicultura
const mongoose = require('mongoose');
const Producto = require('./models/Product');

mongoose.connect('mongodb://localhost:27017/MercadorAgricola', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productosLarvicultura = [
  {
    nombre: "LarviPlus Microalgas",
    categoria: "Larvicultura",
    descripcion: "Suspensión de microalgas tropicales para alimentación inicial de larvas en laboratorio.",
    tipo: "Nutrición",
    subtipo: "Microalgas",
    presentaciones: "Botella 1L / 5L",
    modoDeUso: "Aplicar directamente en tanques de cultivo según densidad larvaria.",
    imagen: "/imagenes/productos/larviplus.webp",
    destacado: "Eco"
  },
  {
    nombre: "Artemia Gold Hatch",
    categoria: "Larvicultura",
    descripcion: "Huevos de Artemia de alta eclosión para alimentación viva en etapas nauplius y postlarva.",
    tipo: "Alimento vivo",
    subtipo: "Artemia",
    presentaciones: "Lata 425g / Bolsa 1kg",
    modoDeUso: "Hidratar y descapsular según protocolo técnico antes de aplicar.",
    imagen: "/imagenes/productos/artemiagold.webp",
    destacado: "Premium"
  },
  {
    nombre: "Larviclean Pro",
    categoria: "Larvicultura",
    descripcion: "Desinfectante institucional para tanques, líneas de aire y equipos en laboratorios acuícolas.",
    tipo: "Sanitizante",
    subtipo: "Multiuso",
    presentaciones: "Bidón 20L",
    modoDeUso: "Diluir según protocolo y aplicar en limpieza previa y post ciclo larvario.",
    imagen: "/imagenes/productos/larviclean.webp",
    destacado: "Nuevo"
  }
];

Producto.insertMany(productosLarvicultura)
  .then(() => {
    console.log("✅ Productos de Larvicultura insertados correctamente");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("❌ Error al insertar productos de Larvicultura:", error);
    mongoose.connection.close();
  });
