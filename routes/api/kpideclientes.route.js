const router = require('express').Router();

const Cliente = require('../../models/cliente.model');

router.get('/', async (req, res) => {
    try {
        
        const clientes = await Cliente.aggregate( [
            {
                $group: {_id:null, promedio:{$avg:"$edad"}, desviacionEstandar: {$stdDevSamp:"$edad"}}
            },
            {$unset: "_id" }
        ])
        res.json(clientes);

    } catch (error) {
        res.status(500).json('Ha ocurrido un error');
    }
});


module.exports = router;