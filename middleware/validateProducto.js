const chalk = require('chalk');

module.exports = function (req, res, next) {
  const { nombre, precio, categoria, stock } = req.body;

  const errores = [];

  if (!nombre || typeof nombre !== 'string' || !nombre.trim()) {
    errores.push('Nombre obligatorio y debe ser texto');
  }

  if (typeof precio !== 'number' || isNaN(precio) || precio <= 0) {
    errores.push('Precio debe ser un número positivo');
  }

  if (!categoria || typeof categoria !== 'string') {
    errores.push('Categoría obligatoria y debe ser texto');
  }

  if (typeof stock !== 'number' || isNaN(stock) || stock < 0) {
    errores.push('Stock debe ser un número válido');
  }

  if (errores.length > 0) {
    console.log(chalk.red('[❌ VALIDACIÓN PRODUCTO]'), chalk.yellow(errores.join(' | ')));
    return res.status(400).json({ error: errores.join(' | ') });
  }

  console.log(chalk.green('[✔ VALIDACIÓN PRODUCTO]'), chalk.blue(nombre));
  next();
};
