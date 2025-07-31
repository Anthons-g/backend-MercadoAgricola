const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const authHeader = req.header('Authorization');

  if (!authHeader) {
    console.log('🔴 [auth] Token ausente en headers');
    return res.status(401).json({ error: 'Acceso denegado: falta token' });
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    console.log('🔴 [auth] Token malformado:', authHeader);
    return res.status(401).json({ error: 'Token malformado' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    console.log('[auth] Token válido');
    console.log(' Usuario:', decoded.id);
    console.log(' Rol:', decoded.role);

    next();
  } catch (error) {
    console.log('❌ [auth] Token inválido o expirado:', error.message);
    return res.status(403).json({ error: 'Token inválido o expirado' });
  }
};
