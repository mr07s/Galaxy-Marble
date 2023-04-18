import React from 'react'

const Readonlyrow = ({ data, handleEditclick, handleDeleteclick, index }) => {
  // console.log(data._id)
  return (
    <tr key={data?._id}>
      <td>{index + 1}</td>
      <td>{data.Name}</td>
      <td>{data.undertakenby}</td>
      <td>{data.price}</td>
      <td>{data.purchasingdate}</td>
      <td>{data.duedate}</td>
      <td>{data.paidamount}</td>
      <td>{data?.volume || 0}</td>
      <td>{data?.pages || 0}</td>
      <td>
        <button type='button' onClick={(event) => handleEditclick(event, data)}>Edit</button>
        <button type='button' onClick={() => handleDeleteclick(data._id)}>Delete</button>
      </td>
    </tr>
  )
}

export default Readonlyrow