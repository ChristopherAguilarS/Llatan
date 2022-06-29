// RUTAS DE API
const router = require('express').Router();

//router.use('/clientes', require('./clientes.route'));

router.use('/listclientes', require('./listclientes.route'));

router.use('/creacliente', require('./creacliente.route'));

router.use('/kpideclientes', require('./kpideclientes.route'));

module.exports = router;