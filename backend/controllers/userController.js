import User from '../models/userModel.js'
import asynchandler from 'express-async-handler'

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
      token: null,
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or Password')
  }
})

export { authUser }
