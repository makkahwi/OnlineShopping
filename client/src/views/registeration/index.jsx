import { cilCopy, cilHome, cilLockLocked, cilUser, cilUserFollow, cilUserPlus } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CCard, CCardBody, CCol, CContainer, CForm, CFormInput, CInputGroup, CInputGroupText, CRow } from '@coreui/react'
import React, { useState } from 'react'
import UsersApi from "../../api/user"
import StoresApi from "../../api/stores"
import { useNavigate } from "react-router-dom";

export default function Registeration() {
  const navigate = useNavigate();

  const [regData, setRegData] = useState({})

  const onSubmission = async () => {
    await UsersApi.register({ ...regData, seller: regData.address ? true : false })
      .then(async (res) => {
        console.log("res", res)
        await StoresApi.create({ ...regData, user: res?.user?.id })
          .then(res => {
            navigate("/")
            console.log("Registered")
          })
          .catch(e => {
            console.log("Store Creation Error", e)
          })
      })
      .catch(e => {
        console.log("User Creation Error", e)
      });
  };

  const regDataUpdate = (key, value) => {
    setRegData({ ...regData, [key]: value })
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
                    <CFormInput required placeholder="Username" name="username" onChange={e => regDataUpdate("username", e.target.value)} />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput required placeholder="Name" name="name" onChange={e => regDataUpdate("name", e.target.value)} />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput required placeholder="Email" type="email" name="email" onChange={e => regDataUpdate("email", e.target.value)} />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      name="new-password"
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
                      name="new-password"
                      onChange={e => regDataUpdate("secpassword", e.target.value)}
                    />
                  </CInputGroup>

                  <div className="d-grid">
                    <CButton color="success" onClick={() => onSubmission()}>Create Shopper Account</CButton>
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
                    <CFormInput required placeholder="Username" name="username" onChange={e => regDataUpdate("username", e.target.value)} />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput required placeholder="Shop Name" name="name" onChange={e => regDataUpdate("name", e.target.value)} />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilHome} />
                    </CInputGroupText>
                    <CFormInput required placeholder="Shop Address" name="address" onChange={e => regDataUpdate("address", e.target.value)} />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilCopy} />
                    </CInputGroupText>
                    <CFormInput required placeholder="Logo Image Link" name="logo" onChange={e => regDataUpdate("logo", e.target.value)} />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput required placeholder="Email" type="email" name="email" onChange={e => regDataUpdate("email", e.target.value)} />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      name="new-password"
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
                      name="new-password"
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
