const router = require('express').Router();

const Cliente = require('../../models/cliente.model');

router.get('/', async (req, res) => {
    try {
        
        const clientes = await Cliente.find();
        res.json(clientes);

    } catch (error) {
        res.status(500).json('Ha ocurrido un error');
    }
});

router.post('/', async (req, res) => {
    
    try {
        
        const newclientes = await Cliente.create(req.body);
        res.json(newclientes);

    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error'});
    }

});


module.exports = router;