var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});

/* GET shop page. */
router.get('/shop', function(req, res, next) {
  res.render('shop', {page:'Shop', menuId:'shop'});
});

module.exports = router;
