module.exports = (req, res, next) => {
  const rol = req.user?.role?.toLowerCase();

  if (!rol) {
    console.log('⛔ [esAdmin] Rol no definido en token');
    return res.status(403).json({ error: 'Acceso denegado: token sin rol' });
  }

  if (rol !== 'admin') {
    console.log('⛔ [esAdmin] Rol no autorizado:', rol);
    return res.status(403).json({ error: 'Solo administradores pueden eliminar productos' });
  }

  next();
};
