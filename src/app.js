const express = require('express');
const morgan = require('morgan');
const mainRouter = require('./routes');



const app = express(); // creee el servidor 


app.use(morgan('dev'));

app.use(mainRouter);

module.exports = app;





