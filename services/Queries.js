
const Shops =require('../models/shops')
const Products =require('../models/products')

const {sendMessage} = require('../helpers/twilio')
async function sendVendorMessage(vendorName,Product,customerName,customerNumber,vendorNumber){
   const from=''
   var text=  `Hello ${vendorName} you have received an order from ${customerName}, the order comprises of is the following items: \n`+  Product.map((res,index)=>`${index+1}. ${res.productName}\nPrice: ${res.productPrice}`).join("\n\n") +'\n' +`Please prepare the products for pickup, incase you want to contact the customer, you can reach out to them at ${customerNumber}`;

console.log(text)
await sendMessage("+254741785762","+16193206948",text);

}


function getProductsById(products){
    return new Promise(function (resolve,reject){
    var newProducts = [];
    for (var i=0; i<products.length; i++) {
        console.log(products[i].id);
        Products.find({_id:products[i].id}, function(err, product) {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log(product);
                newProducts.push(product);
            }
        })
    }
    resolve(newProducts);
})
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

function getVendorDetails(vendor){
    return new Promise(function (resolve,reject){
        var vendorDetails = {};

        for(var i=0; i<vendor.length; i++) {
             Object.assign(vendorDetails, vendor[0])
        }
         resolve(vendorDetails);
    }) 
}


module.exports={
    sendVendorMessage,
    getShopVendorById,
    getProductsById,
    getVendorDetails
  }
