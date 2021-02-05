var express = require('express');
const { FailedDependency } = require('http-errors');
var router = express.Router();
const { query, validationResult } = require('express-validator');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.locals.anuncio = {
    name: 'Cosa', 
    price: 31, 
    photo: '/images/bici.jpg'
  };

  res.render('imagenes');
});

//images-loader?name=iphone
router.get('/images-loader', [
  query('name').isAlpha().withMessage('insert the name of the article to see the picture'),
  ], (req, res, next) => {
  validationResult(req).throw();
  const name = req.query.name;
  res.send(`He recibido el dato query, nombre: ${name}`);

  res.render('imagenes');
});

module.exports = router;