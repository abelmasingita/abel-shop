import Product from '../models/productModel.js'
import asynchandler from 'express-async-handler'

//@desc Fetch all products
//@route Get /api/products
//@access Public route
const getProducts = asynchandler(async (req, res) => {
  const products = await Product.find()
  res.json(products)
})

//@desc Fetch single product
//@route Get /api/products/:id
//@access Public route
const getProductById = asynchandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product Not Found')
  }
})

export { getProducts, getProductById }
