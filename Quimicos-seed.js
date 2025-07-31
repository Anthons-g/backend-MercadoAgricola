const mongoose = require('mongoose');
const Producto = require('./models/Product');

mongoose.connect('mongodb://localhost:27017/MercadorAgricola', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productosQuimicos = [
  {
    nombre: "FoliarMix 20-20-20",
    categoria: "Químicos",
    descripcion: "Fertilizante foliar balanceado con micronutrientes, ideal para cultivos tropicales en etapa vegetativa.",
    tipo: "Nutrición",
    subtipo: "Fertilizante foliar",
    presentaciones: "Bolsa 1kg / 5kg",
    modoDeUso: "Diluir 1-2g por litro de agua y aplicar vía aspersión cada 10 días.",
    imagen: "/imagenes/productos/foliarmix.webp",
    destacado: "Balanceado"
  },
  {
    nombre: "Insecticida BioNeem",
    categoria: "Químicos",
    descripcion: "Extracto natural de neem para control de insectos masticadores y chupadores. No tóxico para fauna benéfica.",
    tipo: "Control de plagas",
    subtipo: "Insecticida orgánico",
    presentaciones: "Botella 500ml / 1L",
    modoDeUso: "Aplicar diluido en agua cada 7 días en horas frescas del día.",
    imagen: "/imagenes/productos/bioneem.webp",
    destacado: "Orgánico"
  },
  {
    nombre: "AgriClean Multiuso",
    categoria: "Químicos",
    descripcion: "Solución desinfectante para herramientas, superficies y equipos agrícolas. Elimina hongos y bacterias.",
    tipo: "Sanitizante",
    subtipo: "Desinfectante agrícola",
    presentaciones: "Bidón 5L / 20L",
    modoDeUso: "Diluir 1:10 en agua y aplicar con atomizador o paño.",
    imagen: "/imagenes/productos/agriclean.webp",
    destacado: "Institucional"
  }
];

Producto.insertMany(productosQuimicos)
  .then(() => {
    console.log("✅ Productos de Químicos insertados correctamente");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("❌ Error al insertar productos de Químicos:", error);
    mongoose.connection.close();
  });
