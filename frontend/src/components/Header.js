import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Outlet, Link, Route, Routes, useNavigate } from 'react-router-dom'
import { logout } from '../actions/userAction'
import SearchBox from './SearchBox'

const Header = () => {
  const history = useNavigate()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()

  const logouthandler = () => {
    dispatch(logout())
  }
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand>
            <Link to='/' className='linkStyle fas-style'>
              masingita
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Routes>
              <Route element={<SearchBox navigate={history} />} />
            </Routes>
            <Nav className='ml-auto'>
              <Nav.Link>
                <Link to='/cart' className='linkStyle fas-style'>
                  <i className='fas fa-shopping-cart fa-style'></i>Cart
                </Link>{' '}
              </Nav.Link>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <NavDropdown.Item>
                    <Link to='/profile' className='linkStyle2'>
                      Profile
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logouthandler}>
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link>
                  <Link to='/login' className='linkStyle'>
                    <i className='fas fa-user fa-style'></i>Sign In
                  </Link>
                </Nav.Link>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <NavDropdown.Item>
                    <Link to='/admin/userlist'>Users</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to='admin/productlist'>Products</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to='admin/orderlist'>Orders</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
          <Outlet />
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
