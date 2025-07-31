const mongoose = require('mongoose');
const Producto = require('./models/Product');

mongoose.connect('mongodb://localhost:27017/MercadorAgricola', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productosSaludPublica = [
  {
    nombre: "BioGuard Gel Antibacterial",
    categoria: "Salud Pública",
    descripcion: "Gel desinfectante con 70% alcohol, aloe vera y glicerina. Ideal para puntos comunitarios y brigadas móviles.",
    tipo: "Desinfectante",
    subtipo: "Gel",
    presentaciones: "Botella 250ml / Galón 3.8L",
    modoDeUso: "Aplicar directamente sobre manos limpias. No requiere enjuague.",
    imagen: "/imagenes/productos/bioguard-gel.webp",
    destacado: "Institucional"
  },
  {
    nombre: "Pulverizador CloroActivo 5%",
    categoria: "Salud Pública",
    descripcion: "Solución clorada para desinfección de superficies, pasamanos, mercados y unidades móviles.",
    tipo: "Sanitizante",
    subtipo: "Líquido",
    presentaciones: "Bidón 5L / 20L",
    modoDeUso: "Diluir 1:10 en agua y aplicar con bomba manual o eléctrica.",
    imagen: "/imagenes/productos/cloroactivo.webp",
    destacado: "Uso Comunitario"
  },
  {
    nombre: "Kit Brigada Preventiva",
    categoria: "Salud Pública",
    descripcion: "Kit institucional con mascarillas, guantes, gel y atomizador. Ideal para brigadas rurales y zonas de riesgo.",
    tipo: "Protección",
    subtipo: "Multicomponente",
    presentaciones: "Caja con 10 kits individuales",
    modoDeUso: "Distribuir por brigada según protocolo local. Reposición semanal recomendada.",
    imagen: "/imagenes/productos/kit-brigada.webp",
    destacado: "Prevención Integral"
  }
];

Producto.insertMany(productosSaludPublica)
  .then(() => {
    console.log("✅ Productos de Salud Pública insertados correctamente");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("❌ Error al insertar productos de Salud Pública:", error);
    mongoose.connection.close();
  });
