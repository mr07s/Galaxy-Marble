import React from 'react'

const Readonlyrow = ({data,handleEditclick,handleDeleteclick,index}) => {
  return (
    <tr key={data.id}>
<td>{index+1}</td>
<td>{data.Name}</td>
<td>{data.undertakenby}</td>
<td>{data.price}</td>
<td>{data.purchasingdate}</td>
<td>{data.duedate}</td>
<td>
<button type='button' onClick={(event)=>handleEditclick(event,data)}>Edit</button>
<button type='button' onClick={()=>handleDeleteclick(data.id)}>Delete</button>
</td>



</tr>
  )
}

export default Readonlyrow