import { cilAccountLogout, cilBell, cilList, cilMenu } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CContainer,
  CHeader,
  CHeaderBrand, CHeaderNav,
  CHeaderToggler, CNavItem, CNavLink
} from '@coreui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'

export default function Header() {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>

        <CHeaderBrand className="mx-auto d-md-none" to="/">
          VeganMegan
        </CHeaderBrand>

        <CHeaderNav>
          <CNavItem>
            <Link to="#" className='text-dark mx-2' style={{ textDecoration: "None" }}>
              <CIcon icon={cilAccountLogout} size="lg" />
            </Link>
          </CNavItem>
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

