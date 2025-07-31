const mongoose = require('mongoose');
const Producto = require('./models/Product');

mongoose.connect('mongodb://localhost:27017/MercadorAgricola', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productosSemillas = [
  {
    nombre: "Semilla Maíz Tropical Híbrido 401",
    categoria: "Semillas",
    descripcion: "Maíz híbrido de alto rendimiento, resistente a sequía y enfermedades foliares. Ideal para zonas cálidas y suelos franco-arenosos.",
    tipo: "Maíz",
    subtipo: "Híbrido",
    presentaciones: "Bolsa 10kg / Saco 25kg",
    modoDeUso: "Sembrar a 80 cm entre surcos y 25 cm entre plantas. Requiere fertilización inicial.",
    imagen: "/imagenes/productos/maiz-hibrido-401.webp",
    destacado: "Alto rendimiento"
  },
  {
    nombre: "Semilla Arroz INIAP 14",
    categoria: "Semillas",
    descripcion: "Variedad mejorada de arroz con ciclo corto (110 días), tolerante a inundaciones y adaptable a zonas costeras.",
    tipo: "Arroz",
    subtipo: "Variedad INIAP",
    presentaciones: "Saco 25kg / Saco 50kg",
    modoDeUso: "Sembrar en suelos nivelados con riego por inundación. Densidad recomendada: 80 kg/ha.",
    imagen: "/imagenes/productos/arroz-iniap-14.webp",
    destacado: "Ciclo corto"
  },
  {
    nombre: "Semilla Lechuga Tropical Crisp",
    categoria: "Semillas",
    descripcion: "Lechuga tipo crisp resistente a calor y humedad. Ideal para producción en campo abierto o invernadero.",
    tipo: "Hortaliza",
    subtipo: "Lechuga",
    presentaciones: "Sobre 10g / Lata 250g",
    modoDeUso: "Sembrar en almácigo y trasplantar a 30 cm entre plantas. Requiere riego constante.",
    imagen: "/imagenes/productos/lechuga-crisp.webp",
    destacado: "Resistencia climática"
  }
];

Producto.insertMany(productosSemillas)
  .then(() => {
    console.log("✅ Productos de Semillas insertados correctamente");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("❌ Error al insertar productos de Semillas:", error);
    mongoose.connection.close();
  });
