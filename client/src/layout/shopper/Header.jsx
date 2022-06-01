import { cilAccountLogout, cilBasket } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CContainer, CHeader, CHeaderNav, CNavItem, CNavLink, CSidebarBrand } from '@coreui/react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import navigation from '../../navs/shopper'
import { useDispatch, useSelector } from 'react-redux'

export default function Header() {
  const basket = useSelector((state) => state.basket)
  const dispatch = useDispatch();

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CSidebarBrand className="d-none d-md-flex">
          <Link to="/" className='text-success' style={{ textDecoration: "None" }}>
            <h4>VeganMegan</h4>
          </Link>
        </CSidebarBrand>

        <CHeaderNav className="d-none d-md-flex me-auto">
          {navigation.map((link, i) => (
            <CNavItem key={i}>
              <Link to={link.to} className='text-success mx-2' style={{ textDecoration: "None" }}>
                {link.name}
              </Link>
            </CNavItem>
          ))}
        </CHeaderNav>

        <CHeaderNav>
          <CNavItem>
            <Link to="/basket" className='text-success mx-2' style={{ textDecoration: "None" }}>
              <CIcon icon={cilBasket} size="lg" />
              {" "}
              {basket.reduce((sum, order) => sum += order.count, 0)}
            </Link>
          </CNavItem>

          <CNavItem>
            <Link to="">
              <CButton variant='ghost' color='light' onClick={() => dispatch({ type: 'setJWT', jwtToken: "" })} className='text-dark mx-2' style={{ textDecoration: "None" }}>
                <CIcon icon={cilAccountLogout} size="lg" />
              </CButton>
            </Link>
          </CNavItem>
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

