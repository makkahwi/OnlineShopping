import { cilLockLocked, cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CCard, CCardBody, CCol, CContainer, CForm, CFormInput, CInputGroup, CInputGroupText, CRow } from '@coreui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import UsersApi from "../../api/user"

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({})

  const loginDataUpdate = (key, value) => {
    setLoginData({ ...loginData, [key]: value })
  };

  const onSubmission = async () => {
    await UsersApi.signIn(loginData)
      .then(res => {
        console.log("Logged In", res)
        dispatch({ type: 'setJWT', jwtToken: res?.jwt })
        dispatch({ type: 'setUsername', username: res?.user?.username })
        dispatch({ type: 'setName', name: res?.user?.name })
        navigate("/")
      })
      .catch(e => {
        console.log("User Login error", e)
      });
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={10}>
            <CRow className="justify-content-center">
              <CCol md={7}>
                <CCard className="p-4 border-0" color="light">
                  <CCardBody>
                    <h4 className='mb-5'>Welcome to</h4>
                    <h1 className='mb-5'>VeganMegan Online Store</h1>
                    <p className="text-medium-emphasis">We're not gods, but together we'll try to help you push-up your down-by-diet limit</p>
                  </CCardBody>
                </CCard>
              </CCol>

              <CCol md={5}>
                <CCard className="p-4">
                  <CCardBody>
                    <h2 className='mb-4'>Login</h2>

                    <CForm>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput placeholder="Username" defaultValue={localStorage.getItem("username")} autoComplete="username" onChange={e => loginDataUpdate("identifier", e.target.value)} />
                      </CInputGroup>

                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          onChange={e => loginDataUpdate("password", e.target.value)}
                        />
                      </CInputGroup>

                      <CRow>
                        <CCol xs={6}>
                          <CButton color="success" className="px-4" onClick={onSubmission}>
                            Login
                          </CButton>
                        </CCol>

                        <CCol xs={6} className="float-right">
                          <CButton color="link" className="px-0">
                            Forgot password?
                          </CButton>
                        </CCol>

                        <CCol xs={12} className="text-right">
                          <h2 className='my-4'>OR</h2>
                        </CCol>

                        <CCol xs={8} className="text-right">
                          <p className='mt-2'>
                            Starting your unique expirence with us NOW
                          </p>
                        </CCol>

                        <CCol xs={4} className="text-right">
                          <Link to="/register">
                            <CButton color="success" className="mt-3" active tabIndex={-1}>
                              Register
                            </CButton>
                          </Link>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
