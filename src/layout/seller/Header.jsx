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
import { NavLink } from 'react-router-dom'

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

        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink}>
              Dashboard
            </CNavLink>
          </CNavItem>

          <CNavItem>
            <CNavLink href="#">Users</CNavLink>
          </CNavItem>
        </CHeaderNav>

        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilAccountLogout} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

