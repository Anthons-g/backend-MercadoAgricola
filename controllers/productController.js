const Producto = require('../models/Product');

const obtenerProductos = async (req, res) => {
  try {
    const filtros = req.query || {};
    const productos = await Producto.find(filtros);
    res.json(productos);
  } catch (err) {
    console.error('❌ Error al obtener productos:', err);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

const obtenerProductoPorId = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(producto);
  } catch (err) {
    console.error('❌ Error al obtener producto por ID:', err);
    res.status(400).json({ error: 'ID inválido' });
  }
};

const crearProducto = async (req, res) => {
  try {
    const usuario = req.user;
    console.log(` [${usuario.role}] ${usuario.email} creó un producto`);

    const nuevoProducto = new Producto(req.body);
    const productoGuardado = await nuevoProducto.save();
    res.status(201).json(productoGuardado);
  } catch (err) {
    console.error('❌ Error al crear producto:', err);
    res.status(400).json({ error: 'Error al crear producto' });
  }
};

const editarProducto = async (req, res) => {
  try {
    const usuario = req.user;
    console.log(` [${usuario.role}] ${usuario.email} editó producto ${req.params.id}`);

    const productoActualizado = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!productoActualizado) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(productoActualizado);
  } catch (err) {
    console.error('❌ Error al editar producto:', err);
    res.status(400).json({ error: 'Error al editar producto' });
  }
};

const eliminarProducto = async (req, res) => {
  try {
    const usuario = req.user;
    console.log(`🗑 [${usuario.role}] ${usuario.email} eliminó producto ${req.params.id}`);

    const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
    if (!productoEliminado) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json({ mensaje: 'Producto eliminado correctamente' });
  } catch (err) {
    console.error('❌ Error al eliminar producto:', err);
    res.status(400).json({ error: 'Error al eliminar producto' });
  }
};

module.exports = {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  editarProducto,
  eliminarProducto
};
