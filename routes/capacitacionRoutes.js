const router = require('express').Router();
const validate = require('../middleware/validateCapacitacion');
const { inscribir } = require('../controllers/capacitacionController');

router.post('/', validate, inscribir);

module.exports = router;
