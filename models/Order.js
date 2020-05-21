var mongoose = require('mongoose');


var ordersSchema = new mongoose.Schema({
products:[{
productName:String,
productDescription:String,
productPrice:String,
productImage:String,
}]

})



module.exports = mongoose.model('orders', ordersSchema);