
const Orders = require('../models/Order')
const Products = require('../models/products')
const Shops = require('../models/shops')
const {sendMessage}= require('../helpers/twilio')
const {sendVendorMessage,getShopVendorById, getVendorDetails, getProductsById} =require('../services/Queries')

exports.addOrder= async (req,res)=>{

    const customerName=req.body.customerName;
    const customerNumber=req.body.customerNumber;
    const shopid=req.body.shopId;
    const VendorDetails= await getShopVendorById(shopid);
    const ProductById= await getProductsById(req.body.products);

    const data={
        products :ProductById,
    }

    Orders.create(data, function(err, result){
        if(err){
            return res.send("There was an error");
        }
        sendVendorMessage(VendorDetails.vendorName,ProductById,customerName,customerNumber,VendorDetails.vendorNumber)

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
    Shops.find({}, function(error,shop){
        if(error){
            res.send("There is an error")
        }else{
            // res.send(shop)
            res.render('index',{shops:shop})
        }
    })
}

exports.testRoute=(req,res)=>{
}


exports.addProducts=(req,res)=>{
    const id=req.body.shop_id;
    const productData={
        productName:req.body.productName,
        productDescription:req.body.productDescription,
        productPrice:req.body.productPrice,
        productImage:req.body.productImage,
        shop:req.body.shop_id
    }

    Products.create(productData, function(error, products){
        if(error){
            res.send("There is an error")
        }else{
            res.send(products)
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

    const id=req.params.id;
    Products.find({shop:id}).populate('shop').exec(async(error, shop)=>{ 
        // res.send(shop)  
        var vendorDetails = await getVendorDetails(shop);
        res.render('shop', {products: shop, shopId: vendorDetails._doc.shop._id, shopName: vendorDetails._doc.shop.vendorName, shopNumber: vendorDetails._doc.shop.vendorNumber})
     })
    }
