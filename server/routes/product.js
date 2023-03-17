import express  from "express";
import {deletedetails, getProductDetails, productdetails} from '../controllers/product.js'


const router =express.Router();

router.post('/pdetails',productdetails);
router.get('/getpdetails',getProductDetails)
router.delete('/deleteproduct/:id',deletedetails)









export default router;



