import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteproduct } from '../../actions/product';

const ProductReadOnlyRow = ({data,index,handleEditchange}) => {
  const dispatch=useDispatch();
const handledelete=(e)=>{
e.preventDefault();
dispatch(deleteproduct(data?._id));
}

  return (
    <tr key={data._id}>
<td>{index+1}</td>
<td>{data.companyname}</td>
<td>{data.productname}</td>
<td>{data.productquantity}</td>
<td>{data.productSellingquantity}</td>
<td>{data.productdate}</td>
{/* <td>{data.duedate}</td> */}
<td>
<button type='button' onClick={()=>handleEditchange(data)}>Edit</button>
<button type='button' onClick={handledelete}  >Delete</button>
</td>
</tr>
)
}

export default ProductReadOnlyRow