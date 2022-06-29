const router = require('express').Router();

const Cliente = require('../../models/cliente.model');

router.post('/', async (req, res) => {
    
    try {
        
        const newclientes = await Cliente.create(req.body);
        res.json(newclientes);

    } catch (error) {
        res.status(500).json({ error: error});
    }

});


module.exports = router;