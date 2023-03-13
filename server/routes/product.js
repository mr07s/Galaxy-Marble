import express  from "express";
import {getProductDetails, productdetails} from '../controllers/product.js'


const router =express.Router();

router.post('/pdetails',productdetails);
router.get('/getpdetails',getProductDetails)

export default router;



