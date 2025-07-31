const Inscripcion = require('../models/Inscripcion')

exports.inscribir = async (req, res) => {
  try {
    const { nombre, correo, sector, edad, curso } = req.body;

    const nuevaInscripcion = new Inscripcion({
      nombre,
      correo,
      sector,
      edad,
      curso
    });

    await nuevaInscripcion.save();
    res.json({ message: 'Inscripción registrada correctamente' });
  } catch (error) {
    console.error('[CAPACITACION] Error al inscribir:', error);
    res.status(500).json({ message: 'Error al registrar la inscripción' });
  }
};
