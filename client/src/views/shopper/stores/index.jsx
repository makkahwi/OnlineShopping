import { CButton, CCard, CCardBody, CCardHeader, CCol, CImage, CRow } from '@coreui/react'
import React, { useState } from 'react'
import Store from "./store"
import Stores from "./stores"

export default function Landing() {

  const [store, setStore] = useState({})

  return (
    store.name ? <Store store={store} setStore={() => setStore({})} /> : <Stores setStore={setStore} />
  )
};
