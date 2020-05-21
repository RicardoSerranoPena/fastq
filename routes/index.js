var express = require('express');
var router = express.Router();
var ctrl= require('../controllers/index')

/* GET home page. */
router.get('/', ctrl.getHome);

/* GET shop page. */
// router.get('/shop', ctrl.getShop);
router.post('/addorders',ctrl.addOrder )
router.post('/addproducts',ctrl.addProducts)
router.get('/getproducts',ctrl.getProducts)
router.post('/createshop',ctrl.createShop)
router.get('/shops',ctrl.getShops)

router.get('/all-stores', function(req,res,next){
  res.render('index')
}
);

router.get('/all-stores', function(req,res,next){
  res.render('index')
}
);

module.exports = router;
