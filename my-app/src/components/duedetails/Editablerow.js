import React, { useEffect, useState } from 'react'
import  './Editablerow.css'

const Editablerow = ({editFormData,handleEditchange,handleCancleclick,index}) => {
  
  const [disable, setDisable] = useState('')
  const isDisabled = () =>{
    const { Name, undertakenby, price, purchasingdate, duedate } = editFormData;
    if (Name && undertakenby && price && purchasingdate && duedate)
      setDisable(false);
    else setDisable(true);
  };
  useEffect(() => {
    isDisabled();
    // console.log(disable);
  }, [isDisabled, disable]);

  
  
  
  
  return (
    <tr key={editFormData._id}>
<td>
 {index+1}
</td>
<td>
    <input type="text" name="Name" placeholder='Name'  value={editFormData.Name} onChange={handleEditchange}/>
</td>
<td>
<input type="text" name="undertakenby" placeholder='undertakenby' value={editFormData.undertakenby} onChange={handleEditchange}/>
</td>
<td>
<input type="number" name="price" placeholder='price'   value={editFormData.price} onChange={handleEditchange}/>
</td>
<td>
<input type="date" name="purchasingdate" placeholder='purchasingdate'   value={editFormData.purchasingdate} onChange={handleEditchange}/>
</td>
<td>
<input type="date" name="duedate" placeholder='duedate'   value={editFormData.duedate} onChange={handleEditchange} />
</td>

<td>
    <button type='submit' disabled={disable}>save</button>
    <button onClick={handleCancleclick}>cancle</button>
</td>




    </tr>
  )
}

export default Editablerow