const getUsersHandler = (req, res) => {
    res.send('NIY: ESTA RUTA TRAE TODOS LOS USUARIOS!');
 };
 
 const getUserHandler = (req, res) => {
     res.send(`NIY: ESTA RUTA TRAE LA INFO DEL USUARIO CON ID ${req.params.id}!`);
 };
 
 const createUserHandler = (req, res) => {
     res.send('NIY: ESTA RUTA CREA UN NUEVO USUARIO!');
 };
 
 module.exports = {
        getUsersHandler,
        getUserHandler,
        createUserHandler,
    };

