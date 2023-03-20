
import React from 'react'

// import './App.css';
import  data from "./mock-data.json"
import { useState,Fragment, useEffect } from 'react';
import {nanoid} from 'nanoid'
// import Navbar from './components/Navbar'
import './DueditailsMain.css'
import Searchbar from './Searchbar';
import Tablehead from './Tablehead';
import Readonlyrow from './Readonlyrow';
import Editform from './Editform';
import Editablerow from './Editablerow';
import { customerdetails, deletecustomerdetails, getdetails, updatecustomer } from '../../actions/customer';

import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
// import { initializeUseSelector } from 'react-redux/es/hooks/useSelector';
// import { resourceLimits } from 'worker_threads';
// to get data from local storage 




const getLocalitems =()=>{
let list=localStorage.getItem('info');
// console.log(list)
if(list){
return JSON.parse(localStorage.getItem('info'));
}
else{
  return [];
}
}



const DueditailsMain = () => {



const duedetails =useSelector(state=>state.customerReducer);
// console.log(duedetails);

// console.log(duedetails);


















const {id} =useParams();
// console.log(id);
const User =JSON.parse(localStorage.getItem('Profile'));
// const userId= User.result.id;
const userId= User?.result?._id;

// console.log(userId);


  const dispatch =useDispatch();
  const navigate =useNavigate();
        
//search filter         
const [search,setSearch]=useState('');
const searching=(e)=>{
  const data=e.target.value;
  setSearch(data);
  // console.log(search);
    }

//Searching mechanism
const searchResult =(search,data)=>{

if(search.toLowerCase() === ''){
  return data;
}
 
  if(search.toLowerCase() !== '')
  {
      // if(data.Name.toLowerCase().includes(search)){
      //   return data.Name.toLowerCase().includes(search);
      // }

       if(data?.undertakenby?.toLowerCase().includes(search))
       {
        return data.undertakenby.toLowerCase().includes(search);
      }

     else if(data?.price?.toLowerCase().includes(search))
     {
        return data.price.toLowerCase().includes(search);
      }

      // else if(data.purchasingdate.includes(search)){
      //   return data.purchasingdate.includes(search);
      // }
      else if(data?.duedate?.includes(search))
      {
        return data.duedate.includes(search);
      }

  }  
}

//Edit form show
const[editform,setEditform]=useState(false);

const add=()=>{

   if(editform){
    setEditform(false);
  
   }
   else{
    setEditform(true);
    
   }


}


  //It stores the customer data
const[customer,setcustomer]=useState(getLocalitems());
// console.log(customer);
//It stores the data which we want to add
const[addFormData,setaddFormData]=useState({
id:'',
SerialNo:'',
Name:'',
undertakenby:'',
price:'',
purchasingdate:'',
duedate:'',
userId:userId
})
// console.log(addFormData);



//It stores the data which we want to edit
const[editFormData,seteditFormData]=useState({
id:'',
Name:'',
undertakenby:'',
price:'',
purchasingdate:'',
duedate:''
})




//It stores the customer ID which will be edited

const [editcustomerId,seteditcustomerId]=useState(null);


// When we first add the data in the formated place  this stores the new data in addFormData variable
const handlechange=(event)=>{
event.preventDefault();
const fieldName=event.target.getAttribute('name')
const fieldvalue= event.target.value;
const newFormData={...addFormData};
newFormData[fieldName]=fieldvalue;
setaddFormData(newFormData);
// console.log(addFormData);



};

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




//After adding the data in the  formated place when we submit it ,this function create a new array of objects with old objects and the new added oone and then save it to the customer variable
const handlesubmit=(event)=>{

event.preventDefault();

const newcustomer ={
id:nanoid(),
Name:addFormData.Name,
undertakenby:addFormData.undertakenby,
price:addFormData.price,
purchasingdate:addFormData.purchasingdate,
duedate:addFormData.duedate

}

const newcustomers=[...customer,newcustomer]
setcustomer(newcustomers)

dispatch(customerdetails(addFormData,navigate)) 


}





//This function first find the id which we want to edit and then take the data form editFormData and after edit 

const handleeditsubmit=(event)=>{
event.preventDefault();

const editeddata={
// id:editcustomerId,
Name:editFormData.Name,
undertakenby:editFormData.undertakenby,
price:editFormData.price,
purchasingdate:editFormData.purchasingdate,
duedate:editFormData.duedate
}
// console.log(editeddata);

// console.log(editcustomerId);
dispatch(updatecustomer(editcustomerId,editeddata))
// const newcustomers =[...customer];
// const index=customer.findIndex((customer)=>customer._id===editcustomerId );
// newcustomers[index]=editeddata;
// setcustomer(newcustomers);
dispatch(getdetails());
seteditcustomerId(null); 


}






//It gives the data of which we want to edit to  editedformdata varible
const handleEditclick=(event,customer)=>{
event.preventDefault();
// console.log(customer);
seteditcustomerId(customer._id)

const formvalues ={

  Name:customer.Name,
  undertakenby:customer.undertakenby,
  price:customer.price,
  purchasingdate:customer.purchasingdate,
  duedate:customer.duedate

}
seteditFormData(formvalues)
// console.log(editFormData);
}

const handleCancleclick=()=>{

  seteditcustomerId(null);
}


const handleDeleteclick=(customerId)=>{

// const newcustomers=[...customer];

// const index =customer.findIndex((customer)=>customer.id===customerId)

// newcustomers.splice(index,1);
// setcustomer(newcustomers);
// console.log("This is customer Id"+customerId)
 dispatch(deletecustomerdetails(customerId));



}






//Add data to local storage
// useEffect(() => {
// localStorage.setItem('info',JSON.stringify(customer))
// }, [customer])



  return (
    <div>

<Searchbar  searching={searching}/>


<div className="app-container">
<form onSubmit={handleeditsubmit}>

<table>
<thead> 
<Tablehead/>
</thead>
<tbody>
{duedetails?.data?.filter((Data)=>{
return searchResult(search,Data)  
} ).filter(Data => 
  Data.userId === userId
).map((data,index)=>(
<Fragment key={index}>
{editcustomerId === data._id?(<Editablerow editFormData={editFormData} handleEditchange={handleEditchange} handleCancleclick={handleCancleclick} index={index}/>): 
(<Readonlyrow data={data} handleEditclick={handleEditclick} handleDeleteclick={handleDeleteclick} index={index} />)}
</Fragment>
))
}

</tbody>
</table>
</form>
<button onClick={add}  className='formaddbtn' >{editform?'Close':'Add'}</button>
{editform &&
<Editform/>}
</div>
</div>
  )
}
export default DueditailsMain
