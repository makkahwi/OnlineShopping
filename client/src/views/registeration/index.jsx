import { cilCopy, cilHome, cilLockLocked, cilUser, cilUserFollow, cilUserPlus } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CCard, CCardBody, CCol, CContainer, CForm, CFormInput, CInputGroup, CInputGroupText, CRow } from '@coreui/react'
import React, { useState } from 'react'

export default function Registeration() {

  const [regData, setRegData] = useState({})

  const onSubmission = async () => {
    console.log("reg", regData)
  };

  const regDataUpdate = (key, value) => {
    setRegData(data => ({ ...data, [key]: value }))
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          {/* Shopper Reg Form */}
          <CCol md={4} lg={4}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h2 className="pb-3">Register as a Shopper</h2>
                  <p className="text-medium-emphasis">Start getting your vegan needs from here</p>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUserPlus} />
                    </CInputGroupText>
                    <CFormInput placeholder="Username" autoComplete="username" onChange={e => regDataUpdate("username", e.target.value)} />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Name" autoComplete="name" onChange={e => regDataUpdate("name", e.target.value)} />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput placeholder="Email" type="email" autoComplete="email" onChange={e => regDataUpdate("email", e.target.value)} />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      onChange={e => regDataUpdate("password", e.target.value)}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                      onChange={e => regDataUpdate("secpassword", e.target.value)}
                    />
                  </CInputGroup>

                  <div className="d-grid">
                    <CButton color="success" onClick={onSubmission}>Create Shopper Account</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
          {/* Seller Reg Form */}
          <CCol md={4} lg={4}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h2 className="pb-3">Register as a Seller</h2>
                  <p className="text-medium-emphasis">A new outlet to reach your heathy customers</p>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUserFollow} />
                    </CInputGroupText>
                    <CFormInput placeholder="Username" autoComplete="username" onChange={e => regDataUpdate("username", e.target.value)} />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Shop Name" autoComplete="name" onChange={e => regDataUpdate("name", e.target.value)} />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilHome} />
                    </CInputGroupText>
                    <CFormInput placeholder="Shop Address" autoComplete="address" onChange={e => regDataUpdate("address", e.target.value)} />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilCopy} />
                    </CInputGroupText>
                    <CFormInput placeholder="Logo Image Link" autoComplete="logo" onChange={e => regDataUpdate("logo", e.target.value)} />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput placeholder="Email" type="email" autoComplete="email" onChange={e => regDataUpdate("email", e.target.value)} />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      onChange={e => regDataUpdate("password", e.target.value)}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                      onChange={e => regDataUpdate("secpassword", e.target.value)}
                    />
                  </CInputGroup>

                  <div className="d-grid">
                    <CButton color="success" onClick={() => onSubmission()}>Create Seller Account</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
};
