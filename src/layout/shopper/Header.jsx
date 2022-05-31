import { cilAccountLogout } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CContainer, CHeader, CHeaderNav, CNavItem, CNavLink, CSidebarBrand } from '@coreui/react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import navigation from '../../navs/shopper'

export default function Header() {
  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CSidebarBrand className="d-none d-md-flex">
          <Link to="/" className='text-success' style={{ textDecoration: "None" }}>
            <h4>VeganMegan</h4>
          </Link>
        </CSidebarBrand>

        <CHeaderNav className="d-none d-md-flex me-auto">
          {navigation.map(link => (
            <CNavItem>
              <CNavLink to={link.to}>
                {link.name}
              </CNavLink>
            </CNavItem>
          ))}
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

