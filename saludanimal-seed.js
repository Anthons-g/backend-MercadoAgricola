const mongoose = require('mongoose');
const Producto = require('./models/Product');

mongoose.connect('mongodb://localhost:27017/MercadorAgricola', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productosSaludAnimal = [
  {
    nombre: "VermiPlus 150",
    categoria: "Salud Animal",
    descripcion: "Antiparasitario oral de amplio espectro para bovinos, porcinos y aves. Eficaz contra nematodos y tenias.",
    tipo: "Antiparasitario",
    subtipo: "Oral",
    presentaciones: "Frasco 250ml / 1L",
    modoDeUso: "Administrar según peso vivo. Consultar tabla técnica por especie.",
    imagen: "/imagenes/productos/vermiplus150.webp",
    destacado: "Control Total"
  },
  {
    nombre: "Vitaminado Rehidratante Bovino",
    categoria: "Salud Animal",
    descripcion: "Solución inyectable con electrolitos, vitaminas y aminoácidos para recuperación postparto y estrés térmico.",
    tipo: "Rehidratante",
    subtipo: "Inyectable",
    presentaciones: "Ampolla 10ml / Caja 100 unidades",
    modoDeUso: "Aplicar vía intramuscular o subcutánea según protocolo veterinario.",
    imagen: "/imagenes/productos/vitaminado-bovino.webp",
    destacado: "Recuperación Rápida"
  },
  {
    nombre: "EctoFog Orgánico",
    categoria: "Salud Animal",
    descripcion: "Fumigante natural para control de ectoparásitos en galpones y corrales. No tóxico para animales ni operarios.",
    tipo: "Fumigante",
    subtipo: "Orgánico",
    presentaciones: "Bidón 5L / 20L",
    modoDeUso: "Aplicar con nebulizador en áreas cerradas cada 15 días.",
    imagen: "/imagenes/productos/ectofog-organico.webp",
    destacado: "Bioseguridad Tropical"
  }
];

Producto.insertMany(productosSaludAnimal)
  .then(() => {
    console.log("✅ Productos de Salud Animal insertados correctamente");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("❌ Error al insertar productos de Salud Animal:", error);
    mongoose.connection.close();
  });
