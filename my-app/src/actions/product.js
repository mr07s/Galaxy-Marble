// import { getProductDetails } from '../../../server/controllers/product';
import * as api from '../api'


export const pdetails = (pdetailsdata,navigate) => async(dispatch)=>
{
const {data} =await api.pdetails(pdetailsdata);
dispatch({ type:'P_DETAILS',payload:data});
dispatch(fetchpdetail())
navigate('showproduct');
}
export const fetchpdetail =() =>async(dispatch)=>
{
const {data} =await api.fetchproducts();
dispatch({type:'FETCH_PRODUCTS',payload:data}) 
}






export const deleteproduct =(productId)=>async(dispatch)=>
{
await api.deleteproduct(productId);
dispatch(fetchpdetail())
}