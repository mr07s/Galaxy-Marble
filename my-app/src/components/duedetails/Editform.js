import { nanoid } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { customerdetails } from "../../actions/customer";
// import Alert from "../Alert";
import "./Editform.css";

const getLocalitems = () => {
  let list = localStorage.getItem("info");
  if (list) {
    return JSON.parse(localStorage.getItem("info"));
  } else {
    return [];
  }
};



const Editform = () => {
  
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(true);
  const [customer, setcustomer] = useState(getLocalitems());
   var inputs = document.getElementsByClassName("textfield");
   const User = JSON.parse(localStorage.getItem("Profile"));

// const [mesage, setMesage] = useState('')
const Message =useSelector(state=>state.customerReducer);


  const userId = User?.result?._id;
  var newcustomer;
  const [addFormData, setaddFormData] = useState({
    Name: "",
    undertakenby: "",
    price: "",
    purchasingdate: "",
    duedate: "",
    userId: userId,
  });



  const handleclear = (event) => {
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
    inputs[4].value = "";

   setaddFormData('');


  };

  
  const isDisabled = () =>{
    const { Name, undertakenby, price, purchasingdate, duedate } = addFormData;
    if (Name && undertakenby && price && purchasingdate && duedate)
      setDisable(false);
    else setDisable(true);
  };
  useEffect(() => {
    isDisabled();
    // console.log(disable);
  }, [isDisabled, disable]);

  const handlechange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldvalue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldvalue;
    setaddFormData(newFormData);
  };
  const handlesubmit = (event) => {
    event.preventDefault();

    newcustomer = {
      // id: nanoid(),
      Name: addFormData.Name,
      undertakenby: addFormData.undertakenby,
      price: addFormData.price,
      purchasingdate: addFormData.purchasingdate,
      duedate: addFormData.duedate,

    };

    // console.log(addFormData);
    const newcustomers = [...customer, newcustomer];
    setcustomer(newcustomers);

    dispatch(customerdetails(addFormData, navigate));
    // alert(customerdetails(addFormData,
      // navigate))
    handleclear();


  };

  //   const [disable, setdisable] = useState('true')
  //   {
  // if(addFormData.Name ===''||addFormData.undertakenby ===''||addFormData.price===''||addFormData.price===''||addFormData.duedate===''){
  //   setdisable(false);

  // }
  //   }

  // console.log('hii');
  // console.log(addFormData);
  // Object.values(addFormData).forEach(key => {handlecheck()});
  // console.log(addFormData.has('Name'));

  // console.log(check);
  return (
    <>
      <h2>Add new customer</h2>
      <form className="Editform" id="myForm">
        <input
          required
          type="text"
          name="Name"
          placeholder="Name"
          id="username"
          className="textfield textfield - 1"
          onChange={handlechange}
        />
        <input
          type="text"
          name="undertakenby"
          placeholder="Undertaken by"
          id="undertakenby"
          className="textfield textfield - 2"
          onChange={handlechange}
        />
        <input
          type="number"
          name="price"
          placeholder="Bill amount"
          id="billamount"
          className="textfield textfield - 3"
          onChange={handlechange}
        />
        <input
          type="date"
          name="purchasingdate"
          placeholder="purchasingdate"
          id="purchasingdate"
          className="textfield textfield - 4"
          onChange={handlechange}
        />
        <input
          type="date"
          name="duedate"
          placeholder="billpaymentdate"
          id="billpaymentdate"
          className="textfield textfield - 5"
          onChange={handlechange}
        />
        <button
          id="btn"
          type="submit"
          disabled={disable}
          onClick={handlesubmit}
        >
          Submit
        </button>

        {/* {message
        
        
        } */}
      </form>
    </>
  );
};
export default Editform;
