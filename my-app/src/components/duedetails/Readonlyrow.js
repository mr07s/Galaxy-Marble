import React from 'react'
import { Link } from 'react-router-dom'

const Readonlyrow = ({ data, handleEditclick, handleDeleteclick, index }) => {
  console.log(data._id)
  return (
    <tr key={data?._id}>
      <td>{index + 1}</td>
      <td><Link to={`/paymenthistory/${data._id}`}>{data.Name}</Link></td>
      <td>{data.undertakenby}</td>
      {/* <td>{data?.price}</td>// This newprice indicate the actual price amount */}
      <td>{data.price}</td>                 {/* this price idicates the due amaount */}
      <td>{data.purchasingdate}</td>
      <td>{data.duedate}</td>
      <td>{data.nextpaymentdate|| 0}</td>
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