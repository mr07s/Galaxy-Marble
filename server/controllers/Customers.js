import mongoose from "mongoose";
import customer from '../models/customer.js'


export const Customer = async(req,res) =>{

const postcustomerdata =req.body;

const customerdata =new customer(postcustomerdata);

try{

await customerdata.save();
res.status(200).json("Customer details dubmitted  sucessfully ");


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
export const deleteCustomer= async(req,res)=>{
    // console.log(req);
    // let {id:_id} = req.body;
    const {id:_id} = req.params;

    // console.log(_id);
    try{
        await customer.findByIdAndRemove(_id)
        // console.log(deleteData)
        // const customerdetails = await customer.find()
        res.status(200).json({message:"Sucessfully deleted"});
    
    }
    catch(error){
        console.log("Customer deletion unsuccessfull due to "+error.message);
    }
}
    
    
    





