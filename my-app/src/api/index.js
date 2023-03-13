import axios from 'axios'

const API = axios.create({baseURL:'http://localhost:5000'})

export const login =(authdata)=> API.post('/user/login',authdata);
export const signup =(authdata)=>API.post('/user/signup',authdata);

export const customer =(customerdata) => API.post('/duedetails/customer',customerdata);
export const customerdetails =() => API.get('/duedetails/getdetails');

export const pdetails =(productdata)=>API.post('/addproduct/pdetails',productdata);

export const fetchproducts =()=>API.get('/addproduct/getpdetails');


