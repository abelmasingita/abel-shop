import React from 'react'
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import CartScreen from './screens/CartScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import OrderScreen from './screens/OrderScreen'
import PaymentSreen from './screens/PaymentSreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import OrderListScreen from './screens/OrderListScreen'
import ProductScreen from './screens/ProductScreen'
import ProfileScreen from './screens/ProfileScreen'
import RegisterScreen from './screens/RegisterScreen'
import ShippingScreen from './screens/ShippingScreen'
import UserEditScreen from './screens/UserEditScreen'
import UserListScreen from './screens/UserListScreen'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/payment' element={<PaymentSreen />} />
            <Route path='/placeorder' element={<PlaceOrderScreen />} />
            <Route path='/login/shipping' element={<ShippingScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/order/:id' element={<OrderScreen />} />
            <Route path='/admin/userlist' element={<UserListScreen />} />
            <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
            <Route path='/admin/productlist' element={<ProductListScreen />} />
            <Route path='/admin/orderlist' element={<OrderListScreen />} />
            <Route
              path='/admin/product/:id/edit'
              element={<ProductEditScreen />}
            />
            <Route path='/cart'>
              <Route path='' element={<CartScreen />} />
              <Route path=':id' element={<CartScreen />} />
            </Route>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/search/:keyword' element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App;
