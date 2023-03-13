import React from 'react'
import './Editform.css'

const Editform = ({handlechange,handlesubmit}) => {
  return (
    <>
    
    <h2>Add new customer</h2>
<form className='Editform' >
<input type="text" name="Name" placeholder='Name' id="username" onChange={handlechange}/>
<input type="text" name="undertakenby" placeholder='Undertaken by' id="undertakenby" onChange={handlechange}/>
<input type="number" name="price"  placeholder='Bill amount' id="billamount" onChange={handlechange}/>
<input type="date" name="purchasingdate" placeholder='purchasingdate' id="purchasingdate" onChange={handlechange}/>
<input type="date" name="duedate" placeholder='billpaymentdate' id="billpaymentdate" onChange={handlechange}/>
<button id='btn' type='submit' onClick={handlesubmit}>Submit</button>
</form>

    
    
    </>
  )
}

export default Editform