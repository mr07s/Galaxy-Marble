import * as api from "../api";

export const customerdetails = (customerdata, navigate) => async (dispatch) => {
  try{
    const { data } = await api.customer(customerdata);
    dispatch({ type: "CUSTOMER_DETAILS", payload: data });
    dispatch(getdetails());
    console.log(data,"Alert message");
    alert(data);
    // return data;
  }
  catch (error){
    console.log(error);
    return error;
  }
};

export const getdetails = () => async (dispatch) =>{
  try{
    const { data } = await api.customerdetails();
    dispatch({ type: "GET_DETAILS", payload: data });
  }catch (error) {
    console.log(error);
  }
};





export const deletecustomerdetails=(customerId) => async (dispatch) => {

    
    try {
        // const { data } = await api.deleteCustomer(customerId);
        await api.deleteCustomer(customerId);
        // dispatch({ type: "CUSTOMER_DETAILS", payload: data });
        dispatch(getdetails());
        } catch (error) {
        console.log(error)
    }
    
     
    };
    