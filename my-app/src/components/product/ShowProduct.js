import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import ProductReadOnlyRow from './ProductReadOnlyRow';
import Tablehead from './Tablehead';

const ShowProduct = () => {
  
  const getpdetails = useSelector(state => state.productreducer);

  console.log(getpdetails);
  
  
  
  
  
  
  
  
    return (
    <>
<table>
<thead> 
<Tablehead/>
</thead>
<tbody>
{getpdetails?.data?.map((data,index)=>(
<Fragment key={index}>
  
  (<ProductReadOnlyRow data={data}  index={index} />)
</Fragment>

))
}





</tbody>
</table>

    </>
  )
}

export default ShowProduct