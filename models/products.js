
var mongoose = require('mongoose');

var Schema = mongoose.Schema 

var productsSchema = new mongoose.Schema({

productName:String,
productDescription:String,
productPrice:String,
productImage:String,
shop: {  type: Schema.ObjectId, ref: 'shops'},
})



module.exports = mongoose.model('products', productsSchema);
