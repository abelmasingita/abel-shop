import express from 'express'
import {
  authUser,
  getUserProfile,
  RegisterUser,
  updateUserProfile,
} from '../controllers/userController.js'
import { protect } from '../middlerware/authmiddleware.js'

const router = express.Router()

router.route('/').post(RegisterUser)
router.post('/login', authUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

export default router
