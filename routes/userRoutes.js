    const express = require('express');
    const router = express.Router();
    const { login, registrarUsuario } = require('../controllers/userController');
    router.post('/registro', registrarUsuario);
    router.post('/login', login); 

    module.exports = router;
