import { CButton, CCard, CCardBody, CCardHeader, CCol, CContainer, CImage, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import React, { useState } from 'react';
import Product from "./product"

export default function Store({ store, setStore }) {

  const [product, setProduct] = useState({})

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader className='p-3'>
          <CRow>
            <CCol md={6}>
              <h4 className="card-title mb-0">
                {store.name}
              </h4>
            </CCol>

            <CCol md={6} className="text-right">
              <CButton onClick={setStore} className="float-right">
                Back to All Stores
              </CButton>
            </CCol>
          </CRow>

        </CCardHeader>

        <CCardBody>
          <CContainer>
            <CRow>
              <CCol md={6} className="text-center">
                <CImage src={store.image} width={200} />
              </CCol>

              <CCol md={6}>
                <CTable align="middle" className="mb-0" hover responsive>
                  <CTableBody>
                    <CTableRow v-for="item in tableItems">
                      <CTableHeaderCell >
                        Name
                      </CTableHeaderCell>

                      <CTableDataCell >
                        {store.name}
                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow v-for="item in tableItems">
                      <CTableHeaderCell >
                        Location
                      </CTableHeaderCell>

                      <CTableDataCell >
                        {store.location}
                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow v-for="item in tableItems">
                      <CTableHeaderCell >
                        On VeganMegan Since
                      </CTableHeaderCell>

                      <CTableDataCell >
                        {store.created_at || "2022-1-1"}
                      </CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </CCol>
            </CRow>
          </CContainer>
        </CCardBody>
      </CCard>

      <CCard className="mb-4">
        <CCardHeader className='p-3'>
          <h6 className="card-title mb-0">
            Products
          </h6>
        </CCardHeader>

        <CCardBody>
          <CRow>
            {store.products.map((product, i) => (
              <CCol md={4} className="text-center" key={i}>
                <a onClick={() => setProduct(product)}>
                  <CImage src={product.image} width={150} />
                  <br />
                  {product.title}
                </a>
              </CCol>
            ))}
          </CRow>
        </CCardBody>
      </CCard>

      {product?.id && <Product product={product} onCancel={() => setProduct({})} />}
    </>
  )
};
