const mongoose = require('mongoose');
const Producto = require('./models/Product');

mongoose.connect('mongodb://localhost:27017/MercadorAgricola', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productosMascotas = [
  {
    nombre: "Shampoo Antipulgas Canino",
    categoria: "Mascotas",
    descripcion: "Fórmula suave con extracto de neem para eliminar pulgas y cuidar el pelaje. Ideal para climas tropicales.",
    tipo: "Higiene",
    subtipo: "Shampoo",
    presentaciones: "Botella 500ml / 1L",
    modoDeUso: "Aplicar sobre el pelaje húmedo, masajear y enjuagar con agua tibia.",
    imagen: "/imagenes/productos/shampoo-antipulgas.webp",
    destacado: "Higiene Natural"
  },
  {
    nombre: "Alimento Premium para Gatos",
    categoria: "Mascotas",
    descripcion: "Croquetas con salmón y arroz, enriquecidas con taurina y omega 3. Nutrición balanceada para gatos adultos.",
    tipo: "Nutrición",
    subtipo: "Croquetas",
    presentaciones: "Bolsa 1kg / 3kg",
    modoDeUso: "Servir según la edad y peso del gato. Asegurar agua fresca disponible.",
    imagen: "/imagenes/productos/alimento-gato-premium.webp",
    destacado: "Nutrición Tropicalizada"
  },
  {
    nombre: "Juguete Mordedor en Forma de Hueso",
    categoria: "Mascotas",
    descripcion: "Resistente, no tóxico y con aroma a carne. Ayuda a la limpieza dental y reduce el estrés.",
    tipo: "Entretenimiento",
    subtipo: "Juguete mordedor",
    presentaciones: "Tamaño único 15cm",
    modoDeUso: "Ofrecer durante juegos o después de las comidas para limpieza dental.",
    imagen: "/imagenes/productos/juguete-hueso.webp",
    destacado: "Entretenimiento Saludable"
  }
];

Producto.insertMany(productosMascotas)
  .then(() => {
    console.log("✅ Productos de Mascotas insertados correctamente");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("❌ Error al insertar productos de Mascotas:", error);
    mongoose.connection.close();
  });
