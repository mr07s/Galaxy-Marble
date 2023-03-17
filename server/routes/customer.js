import express from 'express'

import {Customer,deleteCustomer,getcustomerdetails} from '../controllers/Customers.js'


const router = express.Router();

router.post('/customer',Customer);
router.get('/getdetails',getcustomerdetails)
router.delete('/deleteCustomer/:id',deleteCustomer)

export default router;

