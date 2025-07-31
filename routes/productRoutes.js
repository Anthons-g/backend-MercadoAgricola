const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const esAdmin = require('../middleware/esAdmin');
const validateProducto = require('../middleware/validateProducto');
const {
  obtenerProductos,
  crearProducto,
  editarProducto,
  eliminarProducto,
  obtenerProductoPorId
} = require('../controllers/productController');

router.get('/', obtenerProductos);
router.get('/:id', obtenerProductoPorId);

router.post('/', auth, validateProducto, crearProducto);
router.put('/:id', auth, validateProducto, editarProducto);
router.delete('/:id', auth, esAdmin, eliminarProducto); 

module.exports = router;
