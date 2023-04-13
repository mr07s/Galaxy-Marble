import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Editablerow.css";
import { updatecustomer, getdetails } from "../../actions/customer";

const Editablerow = ({ handleCancleclick, index, data }) => {
  const [disable, setDisable] = useState("");

  const dispatch = useDispatch();
  const [editcustomerId, seteditcustomerId] = useState(data?._id);
  // const User = JSON.parse(localStorage.getItem("Profile"));
  // const userId= User.result.id;
  // const userId= User?.result?._id;
  const [editFormData, seteditFormData] = useState(data);
  const [oldData, setOldData] = useState(data);

  // console.log("jHe llllj");

  const isDisabled = () => {
    const { Name, undertakenby, price, purchasingdate, duedate, paidamount, volume, pages } =
      editFormData;
    if (
      Name &&
      undertakenby &&
      price &&
      purchasingdate &&
      duedate &&
      paidamount &&
      volume &&
      pages
    )
      setDisable(false);
    else setDisable(true);
  };
  useEffect(() => {
    isDisabled();
    // console.log(disable);
  }, [isDisabled, disable]);

  const handleEditchange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldvalue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldvalue;
    console.log(newFormData);
    seteditFormData(newFormData);
  };











  // const handleSubmit=(e)=>{
  //   e.preventDefault();
  //   console.log("Hii")
  // }




  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log(editFormData);
    console.log("Hiiboyyy");
    const oldPaidAmount = oldData["paidamount"];
    const oldPrice = oldData['price'];
    if (oldData["paidamount"] !== editFormData["paidamount"]) {

      if (parseInt(editFormData["price"]) - parseInt(editFormData['paidamount']) >= 0 && parseInt(editFormData['paidamount']) >= 0) {
        // console.log("Okk")
        editFormData["price"] = parseInt(oldPrice) - editFormData["paidamount"];
        editFormData["paidamount"] = parseInt(oldPaidAmount) + parseInt(editFormData["paidamount"]);

      }
      else if (parseInt(editFormData["price"]) - parseInt(editFormData['paidamount']) < 0) {
        console.log("Okk")
        alert("This payment not possible");
        editFormData["paidamount"] = oldPaidAmount;
      }

      else if (parseInt(editFormData['paidamount']) < 0) {
        console.log("Okk")
        alert("This payment not possible");
        editFormData["paidamount"] = oldPaidAmount;
      }




    }
    // console.log(oldpaidData);

    // if(parseInt(editFormData["price"])-parseInt(editFormData['paidamount'])>=0){
    //   editFormData['price']=editFormData["price"]-editFormData['paidamount'];
    //   editFormData['paidamount']=parseInt(oldpaidData)+parseInt(editFormData['paidamount']);

    // }



    // console.log(editeddata);
    dispatch(updatecustomer(data._id, editFormData));
    dispatch(getdetails());
    handleCancleclick();
    seteditcustomerId(null);
  };

  // console.log(addFormData);




  return (
    <tr key={editFormData._id}>
      <td>{index + 1}</td>
      <td>
        <input
          type="text"
          name="Name"
          placeholder="Name"
          value={editFormData.Name}
          onChange={handleEditchange}
        />
      </td>
      <td>
        <input
          type="text"
          name="undertakenby"
          placeholder="undertakenby"
          value={editFormData.undertakenby}
          onChange={handleEditchange}
        />
      </td>
      <td>
        <input
          type="number"
          name="price"
          placeholder="price"
          value={editFormData.price}
          onChange={handleEditchange}
        />
      </td>
      <td>
        <input
          type="date"
          name="purchasingdate"
          placeholder="purchasingdate"
          value={editFormData.purchasingdate}
          onChange={handleEditchange}
        />
      </td>
      <td>
        <input
          type="date"
          name="duedate"
          placeholder="duedate"
          value={editFormData.duedate}
          onChange={handleEditchange}
        />
      </td>
      <td>
        <input
          type="number"
          name="paidamount"
          placeholder="paidamount"
          value={editFormData.paidamount}
          onChange={handleEditchange}
        />
      </td>
      <td>
        <input
          type="number"
          name="volume"
          placeholder="volume"
          value={editFormData.volume}
          onChange={handleEditchange}
        />
      </td>
      <td>
        <input
          type="number"
          name="pages"
          placeholder="pages"
          value={editFormData.pages}
          onChange={handleEditchange}
        />
      </td>

      <td>
        <button onClick={handleSubmit} disabled={disable}>
          save
        </button>
        <button onClick={handleCancleclick}>cancle</button>
      </td>
    </tr>
  );
};
export default Editablerow;
