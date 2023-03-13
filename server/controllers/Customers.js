import mongoose from "mongoose";
import customer from '../models/customer.js'


export const Customer = async(req,res) =>{

const postcustomerdata =req.body;

const customerdata =new customer(postcustomerdata);

try{

await customerdata.save();
res.status(200).json("Saved a customer data sucessfully ");


}
catch(error){
console.log(error);
res.status(409).json("Coudn't post a new customerdata sucessfully");

}
  
};


export const getcustomerdetails =  async(req,res)=>{


try{
    // const user =req.body;
        
    const customerdetails = await customer.find()
    res.status(200).json(customerdetails);
    
    
    }
    catch(error)
{        
res.status(404).json({message:error.message});
}
    
    
    
    
    
    }
    
    
    





