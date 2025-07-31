// 🌿 Seed institucional para productos agrícolas tropicalizados
const mongoose = require('mongoose');

// Ajustá la ruta según tu proyecto
const Producto = require('./models/Product');

// Conexión local (podés ajustar a Atlas, Docker o .env si usás variables)
mongoose.connect('mongodb://localhost:27017/MercadorAgricola', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productosAgricolas = [
  {
    nombre: "Fertimax Pro",
    categoria: "Agricola",
    descripcion: "Fertilizante granulado de liberación controlada, ideal para etapas de crecimiento inicial.",
    tipo: "Fertilizante",
    subtipo: "Granulado",
    presentaciones: "Sacos de 25kg",
    modoDeUso: "Aplicar directamente al suelo según dosis recomendada por técnico.",
    imagen: "/imagenes/productos/fertimax.webp",
  },
  {
    nombre: "ControlFol",
    categoria: "Agricola",
    descripcion: "Fungicida foliar sistémico para cultivos de alto rendimiento con acción prolongada.",
    tipo: "Fungicida",
    subtipo: "Foliar",
    presentaciones: "1L, 5L",
    modoDeUso: "Diluir y aplicar con equipo de aspersión cada 15 días.",
    imagen: "/imagenes/productos/controlfol.webp",
  },
  {
    nombre: "BioRaíz",
    categoria: "Agricola",
    descripcion: "Estimulador biológico de raíces, ideal para trasplante y mejora de absorción de nutrientes.",
    tipo: "Bioestimulante",
    subtipo: "Raíz",
    presentaciones: "Botella de 1L",
    modoDeUso: "Mezclar con agua y aplicar en zona radicular durante la mañana.",
    imagen: "/imagenes/productos/bioraiz.webp",
  }
];

Producto.insertMany(productosAgricolas)
  .then(() => {
    console.log("✅ Productos agrícolas institucionales insertados correctamente");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("❌ Error al insertar:", error);
    mongoose.connection.close();
  });
