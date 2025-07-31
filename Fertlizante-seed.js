
const mongoose = require('mongoose');

const Producto = require('./models/Product');


mongoose.connect('mongodb://localhost:27017/MercadorAgricola', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productosFertilizantes = [
  {
    nombre: "EcoGrow Bioactivo",
    categoria: "Fertilizante",
    descripcion: "Fertilizante orgánico enriquecido con microorganismos tropicales para cultivos sostenibles.",
    tipo: "Orgánico",
    subtipo: "Biológico",
    presentaciones: "Bolsa 10kg / 25kg",
    modoDeUso: "Aplicar al suelo durante el laboreo, especialmente en zonas tropicales húmedas.",
    imagen: "/imagenes/productos/ecogrow.webp",
    destacado: "Eco"
  },
  {
    nombre: "NitroMax Plus",
    categoria: "Fertilizante",
    descripcion: "Formulación avanzada con nitrógeno controlado para frutas tropicales y raíces profundas.",
    tipo: "Mineral",
    subtipo: "Granulado",
    presentaciones: "Sacos de 20kg",
    modoDeUso: "Distribuir alrededor de la base del cultivo antes del riego.",
    imagen: "/imagenes/productos/nitromax.webp",
    destacado: "Nuevo"
  },
  {
    nombre: "TropicBoost 360",
    categoria: "Fertilizante",
    descripcion: "Complejo mineral tropical para hojas verdes y resistencia climática en zonas húmedas.",
    tipo: "Foliar",
    subtipo: "Líquido",
    presentaciones: "Bidón de 5L",
    modoDeUso: "Diluir y aplicar mediante aspersión semanalmente durante temporada de crecimiento.",
    imagen: "/imagenes/productos/tropicboost.webp",
    destacado: "Premium"
  }
];

Producto.insertMany(productosFertilizantes)
  .then(() => {
    console.log("✅ Fertilizantes institucionales insertados correctamente");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("❌ Error al insertar fertilizantes:", error);
    mongoose.connection.close();
  });
