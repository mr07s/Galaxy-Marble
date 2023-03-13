import React from 'react'


const Editablerow = ({editFormData,handleEditchange,handleCancleclick,index}) => {
  return (
    <tr key={editFormData.id}>
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
<input type="text" name="price" placeholder='price'   value={editFormData.price} onChange={handleEditchange}/>
</td>
<td>
<input type="text" name="purchasingdate" placeholder='purchasingdate'   value={editFormData.purchasingdate} onChange={handleEditchange}/>
</td>
<td>
<input type="text" name="duedate" placeholder='duedate'   value={editFormData.duedate} onChange={handleEditchange} />
</td>

<td>
    <button type='submit'>save</button>
    <button onClick={handleCancleclick}>cancle</button>
</td>




    </tr>
  )
}

export default Editablerow