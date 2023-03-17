import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { pdetails } from '../../actions/product'; 

import './Addproduct.css'

const AddProduct = () => {

const User = JSON.parse(localStorage.getItem('Profile'));
// console.log(User)
const userId =User?.result?._id;

const [productname, setProductname] = useState('')
const [productquantity, setProductquproductquantity] = useState('')
const [productSellingquantity, setProductSellingquantity] = useState('')
const [productdate, setProductdate] = useState('')

const navigate = useNavigate();
const dispatch = useDispatch();

// console.log(productname,productquantity,productSellingquantity,productdate)
//  val = 0;
const productmessage = useSelector(state => state.productreducer)

const handleaddproduct = (event)=>{
  event.preventDefault();
  (dispatch(pdetails({productname,productquantity,productSellingquantity,productdate,userId},navigate)))


  // productreducer
 
  // val=1;

}

  return (
    <div className='outerbox'>
      <div className='formholder'>
    <form action="" className='Productform' onSubmit={handleaddproduct}>
<label htmlFor="productname" >
<h6>Products Name</h6>
<input type="text" placeholder='Type Products Name' id='productname' onChange={(e)=> setProductname(e.target.value)}/>
</label>
      
<label htmlFor="productsquantity">
<h6>Products Quantity</h6>
<input type="text" placeholder='Type Products Quantity' id='productsquantity' onChange={(e)=> setProductquproductquantity(e.target.value)}/>
</label>

<label htmlFor="productSellingquantity">
  <h6>Products Selling quantity</h6>
<input type="text" placeholder='Type Products Selling quantity' id='productSellingquantity'   onChange={(e)=> setProductSellingquantity(e.target.value)}/>
</label>

<label htmlFor="enterdate">
  <h6>Enter Date</h6>
<input type="Date" placeholder='Type Products Selling quantity' id='enterdate'   onChange={(e)=> setProductdate(e.target.value)}/>
</label>

<label htmlFor="photo">
  <h6>Upload Picture</h6>
<input type="file" name='file' id='photo'/>
</label>

<div  id='buttondiv' >

<button className='submit'>Add Products</button>

</div>

    </form>
 
      </div>
 
    
    </div>
  )
}

export default AddProduct