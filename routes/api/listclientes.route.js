const router = require('express').Router();

const Cliente = require('../../models/cliente.model');

router.get('/', async (req, res) => {
    try {
        
        const clientes = await Cliente.aggregate( [
            {
                $addFields : {
                    fechaProbableMuerte: { $add: [{$round: [{ $multiply: [ { $rand: {} }, 10 ]}]},75]}
                }
            },
            {$unset: "_id"}
            ,
            {$unset: "__v"}
        ])
        res.json(clientes);

    } catch (error) {
        res.status(500).json('Ha ocurrido un error');
    }
});


module.exports = router;