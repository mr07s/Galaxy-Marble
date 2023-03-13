import express from 'express'

import {Customer,getcustomerdetails} from '../controllers/Customers.js'


const router = express.Router();

router.post('/customer',Customer);
router.get('/getdetails',getcustomerdetails)

export default router;

