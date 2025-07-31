const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const chalk = require('chalk');
const conectarDB = require('./config/db');

const usuarioRoutes = require('./routes/userRoutes');
const productoRoutes = require('./routes/productRoutes');
const capacitacionRoutes = require('./routes/capacitacionRoutes');

dotenv.config();
conectarDB();

const app = express();

app.use(cors({
  origin: ['http://localhost:3000', 'https://tu-frontend.onrender.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.use((req, res, next) => {
  console.log(chalk.blue(`[${req.method}] ${req.originalUrl}`));
  next();
});

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/capacitacion', capacitacionRoutes);

app.get('/', (req, res) => {
  res.send(' Backend  activo ');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(chalk.green(` Backend institucional corriendo en http://localhost:${PORT}`));
});
