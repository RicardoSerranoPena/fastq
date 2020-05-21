
const Orders = require('../models/Order')
const Products = require('../models/products')
const Shops = require('../models/shops')
const {sendMessage}= require('../helpers/twilio')
const {sendVendorMessage,getShopVendorById} =require('../services/Queries')

exports.addOrder= async (req,res)=>{
    console.log(req.body)

    const customerName=req.body.customerName;
    const customerNumber=req.body.customerNumber;
    const shopid=req.body.shopId
    const VendorDetails= await getShopVendorById(shopid);

    const data={
      products :req.body.products,
    }

    Orders.create(data, function(err, result){
     if(err){
        return res.send("There was an error");
     }
       sendVendorMessage(VendorDetails.vendorName,req.body.products,customerName,customerNumber,VendorDetails.vendorNumber)

      res.send(result)

    
    })
      
}

//get the orders by user
exports.getUserOrders=(req,res)=>{
    const userid=req.params.user_id
    Orders.find({_user:userid}, function(error,orders){
      if(error){
          return res.send("There was an error")
      }else{
          return res.send(orders)
      }
    })
}



exports.getHome=(req,res)=>{

res.render('index', {page:'Home', menuId:'home'});

}


exports.addProducts=(req,res)=>{
    const id=req.body.shop_id;
    const productData={
            productName:req.body.productName,
            productDescription:req.body.productDescription,
            productPrice:req.body.productPrice,
            productImage:req.body.productImage
    }

    Shops.findOne({_id:id}, function(error, shop){
        if(error){
            res.send("There is an error")
        }else{
            shop.products.push(productData)
            shop.save()
            res.send(shop)
        }
    })

}

exports.getProducts=(req,res)=>{
    Products.find({}, function(error,products){
        if(error){
            res.send("There is an error")
        }else{
           res.send(products) 
        }
    })
}

exports.createShop=(req,res)=>{
    
    Shops.create(req.body,function(error, shop){
        if(error){
        }else{
           res.send(shop) 
        }
    })

}



exports.getShops=(req,res)=>{
    // const id=req.params.id;
    Shops.find({}, function(error,shop){
        if(error){
            res.send("There is an error")
        }else{
            res.send(shop)
        //    res.render('shop',{products:shop.products}) 
        }
    })
}
