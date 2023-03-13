import React from 'react'

const ProductReadOnlyRow = ({data,index}) => {
  return (
    <tr key={data.id}>
<td>{index+1}</td>
<td>{data.productname}</td>
<td>{data.productquantity}</td>
<td>{data.productquantity}</td>
<td>{data.productdate}</td>
{/* <td>{data.duedate}</td> */}
<td>
<button type='button' >Edit</button>
<button type='button' >Delete</button>
</td>



</tr>
  )
}

export default ProductReadOnlyRow