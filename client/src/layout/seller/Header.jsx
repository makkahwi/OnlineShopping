import { cilAccountLogout, cilMenu } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CContainer, CHeader, CHeaderBrand, CHeaderNav, CHeaderToggler, CNavItem } from '@coreui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

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

