import mongoose from "mongoose"
import product from "../models/product.js"



export const  productdetails = async(req,res)=>{

const productdetails =req.body;

const postproductdetails = new  product(productdetails);
try {

await postproductdetails.save();
res.status(200).json("saved a product data sucessfully");

    
} catch (error) {
    
console.log(error);
res.status(409).json("Coudn't post a productdetails");

}
};


export const getProductDetails =async (req,res) =>{

try {
   const productList = await product.find();
res.status(200).json(productList);

} catch (error) {
    
res.status(404).json({message:error.message})

}








}





