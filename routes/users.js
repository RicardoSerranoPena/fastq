var express = require('express');
var router = express.Router();
var ctrl =require('../controllers/users')

/* GET users listing. */
router.post('/login',ctrl.login)
router.post('/register',ctrl.register)
module.exports = router;
