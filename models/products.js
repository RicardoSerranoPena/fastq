var mongoose = require('mongoose');


var productsSchema = new mongoose.Schema({

productName:String,
productDescription:String,
productPrice:String,
productImage:String,
})



module.exports = mongoose.model('products', productsSchema);