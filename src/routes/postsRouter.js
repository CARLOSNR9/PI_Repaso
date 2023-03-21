const { Router } = require('express');
const postRouter = Router();

postRouter.get('/', (req, res) => {
    res.send('Estoy en Posts');
});

postRouter.post('/', (req, res) => {
    res.send('NIY: ESTA RUTA CREA UN NUEVO POST!');
});



module.exports = postRouter;
