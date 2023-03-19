
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import { fetchpdetail, updateproduct } from '../../actions/product';
// import  './Editablerow.css'

const Editablerow = ({data,handleCancleclick,index}) => {
  
  const [disable, setDisable] = useState('')
  const dispatch=useDispatch();
  const [editFormData, seteditFormData] = useState(data);



  const isDisabled = () =>{
    const { companyname, productname, productquantity, productSellingquantity, productdate } = editFormData;
    if (companyname && productname && productquantity && productSellingquantity && productdate)
      setDisable(false);
    else setDisable(true);
  };

  useEffect(() => {
    isDisabled();
    // console.log(disable);
  }, [isDisabled, disable]);

// console.log(editFormData);
const handleEditchange=(event)=>{
event.preventDefault();

const fieldName =event.target.getAttribute('name');
const fieldvalue=event.target.value;

const newFormData ={...editFormData};

newFormData[fieldName]=fieldvalue;
seteditFormData(newFormData);
// setaddFormData(null);
// console.log(event.target._id);
// console.log(editFormData)
}

const handlesubmit =(e)=>{

e.preventDefault();
dispatch (updateproduct(data._id,editFormData));
dispatch(fetchpdetail());
handleCancleclick();



}







  return (
    <tr key={data._id}>
<td>
 {index+1}
</td>
<td>
<input type="text"  name="companyname" value={editFormData.companyname}  onChange={handleEditchange}/>
</td>
<td>
    <input type="text" name="productname"  value={editFormData.productname} onChange={handleEditchange}/>
</td>
<td>
<input type="number" name="productquantity"  value={editFormData.productquantity} onChange={handleEditchange}/>
</td>
<td>
<input type="number" name='productSellingquantity'  value={editFormData.productSellingquantity} onChange={handleEditchange}/>
</td>
<td>
<input type="date" name="productdate"   value={editFormData.productdate} onChange={handleEditchange}/>
</td>

<td>

    <button type='submit'  onClick={handlesubmit}  disabled={disable}>save</button>
    <button  onClick={handleCancleclick}>cancle</button>
</td>

    </tr>
  )
}

export default Editablerow