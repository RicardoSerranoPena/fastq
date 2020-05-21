var mongoose = require('mongoose');


var shopssSchema = new mongoose.Schema({
vendorName:String,
vendorNumber:String,
productImage:String,
products:[
{
productName:String,
productDescription:String,
productPrice:String,
productImage:String,
}
]
})



module.exports = mongoose.model('shops', shopssSchema);