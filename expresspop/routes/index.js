var express = require('express');
const { FailedDependency } = require('http-errors');
var router = express.Router();
const { query, validationResult } = require('express-validator');

const anuncios = require('../anuncios.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.ejemplo = 'Esto es un ejemploo';

  res.locals.valorInyeccion = '<script>("Código inyectado")</script>';
  res.locals.anuncios = anuncios;
  res.locals.anuncioslength = anuncios.length;
  res.locals.anuncios1 = anuncios[0].name;

  const segundoActual = (new Date()).getSeconds();
  res.locals.condicion = {
    segundo: segundoActual,
    esPar: segundoActual % 2 === 0
  };

  res.render('index');
});

module.exports = router;
