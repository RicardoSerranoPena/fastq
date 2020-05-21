
const Shops =require('../models/shops')

const {sendMessage} = require('../helpers/twilio')
function sendVendorMessage(vendorName,Product,customerName,customerNumber,vendorNumber){
   const from=''
   var text=  `Hello ${vendorName} you have received an order from ${customerName}, the order comprises of is the following items: \n`+  Product.map((res,index)=>`${index+1}. ${res.productName}\nPrice: ${res.productPrice}`).join("\n\n") +'\n' +`Please prepare the products for pickup, incase you want to contact the customer, you can reach out to them at ${customerNumber}`;

console.log(text)
sendMessage("+254741785762","+16193206948",text);

}





function getShopVendorById(id){
    return new Promise(function (resolve,reject){
    Shops.findOne({_id:id}, function(error,shop){
        if(error){
            reject(error)
        }else{
            resolve(shop)

        }
    })})
}


module.exports={
    sendVendorMessage, 
    getShopVendorById
  }