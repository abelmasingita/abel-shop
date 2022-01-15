import express from 'express'
const router = express.Router()
import { addOrderItems } from '../controllers/orderController.js'
import { protect } from '../middlerware/authmiddleware.js'

router.route('/').post(protect, addOrderItems)

export default router
