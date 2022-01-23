import express from 'express'
import {
  authUser,
  getUserProfile,
  RegisterUser,
  updateUserProfile,
  getUsers,
} from '../controllers/userController.js'
import { admin, protect } from '../middlerware/authmiddleware.js'

const router = express.Router()

router.route('/').post(RegisterUser).get(protect, admin, getUsers)
router.post('/login', authUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

export default router
