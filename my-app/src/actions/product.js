import * as api from '../api'


export const pdetails = (pdetailsdata,navigate) => async(dispatch)=>{

const {data} =await api.pdetails(pdetailsdata);
// navigate('/');
dispatch({ type:'P_DETAILS',payload:data});
dispatch(fetchpdetail())




}

export const fetchpdetail =() =>async(dispatch)=>{

const {data} =await api.fetchproducts();
dispatch({type:'FETCH_PRODUCTS',payload:data}) 


}

