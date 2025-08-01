const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { correo, contraseña } = req.body;

  try {
    const emailNormalizado = correo?.trim()?.toLowerCase();
    const usuario = await User.findOne({ email: emailNormalizado });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const passwordValida = await bcrypt.compare(contraseña, usuario.password);
    if (!passwordValida) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    const token = jwt.sign(
      {
        id: usuario._id,
        email: usuario.email,
        role: usuario.role?.trim()?.toLowerCase()
      },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.status(200).json({
      token,
      correo: usuario.email,
      role: usuario.role
    });
  } catch (error) {
    console.error(' Error en login:', error);
    res.status(500).json({ error: 'Error al procesar la solicitud' });
  }
};


exports.registrarUsuario = async (req, res) => {
  const { correo, contraseña, rol } = req.body;

  try {
    if (!correo || !contraseña) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const emailNormalizado = correo.trim().toLowerCase();

    const usuarioExistente = await User.findOne({ email: emailNormalizado });
    if (usuarioExistente) {
      return res.status(409).json({ error: 'Ya existe una cuenta con ese correo' });
    }

    const contraseñaHasheada = await bcrypt.hash(contraseña, 10);

    const nuevoUsuario = await User.create({
      email: emailNormalizado,
      password: contraseñaHasheada,
      role: rol?.trim()?.toLowerCase() || 'usuario'
    });

    console.log('✅ Usuario creado:', nuevoUsuario);

    res.status(201).json({ mensaje: 'Usuario creado correctamente' });
  } catch (error) {
    console.error('🔴 Error en el registro:', error);
    res.status(500).json({ error: 'Error en el registro', detalle: error.message });
  }
};
