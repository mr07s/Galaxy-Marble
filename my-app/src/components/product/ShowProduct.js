import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductReadOnlyRow from './ProductReadOnlyRow';
import Tablehead from './Tablehead';
import './ShowProduct.css'
import Editablerow from './Editablerow';

const ShowProduct = () => {
  
  const getpdetails = useSelector(state => state.productreducer);

  // console.log(getpdetails);
 
const [productId, setProductId] = useState(null)
const handleEditchange=(product)=>{
setProductId(product._id);
// console.log(productId);


}
const handleCancleclick =()=>{

  setProductId('');

}


const editFormData=()=>{


}




    return (
    <div className='outerbox'>
<table className='outertable'>
<thead> 
<Tablehead/>
</thead>
<tbody>
{
getpdetails?.data?.map((data,index)=>(
<Fragment key={index}>
{productId === data._id?(<Editablerow data={data} index={index} handleCancleclick={handleCancleclick}/>): 
<ProductReadOnlyRow data={data}  index={index} handleEditchange={handleEditchange} />
}
</Fragment>

))
}

</tbody>
</table>

    </div>
  )
}

export default ShowProduct