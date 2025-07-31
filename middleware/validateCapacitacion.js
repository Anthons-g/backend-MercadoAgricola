module.exports = function (req, res, next) {
  const { sector, edad, curso } = req.body
  if (!sector || !edad || !curso) {
    return res.status(400).json({ error: 'Campos requeridos faltantes' })
  }
  next()
}
