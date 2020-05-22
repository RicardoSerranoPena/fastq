var express = require('express');
var router = express.Router();
var ctrl= require('../controllers/index')

/* GET home page. */
router.get('/', ctrl.getHome);

/* GET shop page. */
// router.get('/shop', ctrl.getShop);
router.post('/addorders',ctrl.addOrder )
router.post('/addproducts',ctrl.addProducts)
router.get('/getproducts/:id',ctrl.getProducts)
router.post('/createshop',ctrl.createShop)
router.get('/getShopVendorById/:id',ctrl.getShops)
router.post('/testRoute', ctrl.testRoute)
router.get('/all-stores', function(req,res,next){
  res.render('index')
}
);

module.exports = router;
