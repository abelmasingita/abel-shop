import User from '../models/userModel.js'
import asynchandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'

//@desc Auth User & get Token
//@route Post api/users/login
//@access Public route
const authUser = asynchandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or Password')
  }
})

//@desc Auth User profile
//@route Get api/users/profile
//@access Protected route
const getUserProfile = asynchandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or Password')
  }
})

//@desc Regiter new User
//@route Get api/users
//@access Public
const RegisterUser = asynchandler(async (req, res) => {
  const { email, password, name } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password,
  })

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

export { authUser, getUserProfile, RegisterUser }
