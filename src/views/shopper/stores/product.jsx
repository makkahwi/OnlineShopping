import { CCol, CContainer, CFormInput, CImage, CInputGroup, CInputGroupText, CRow } from '@coreui/react';
import React, { useMemo, useState } from 'react';
import Modal from '../../../components/modal';

export default function Product({ product, onCancel }) {
  const [open, setOpen] = useState(product?.id ? true : false)

  const modelContent = () => (
    <>
      <CContainer>
        <CRow >
          <CCol md={12} className="text-center">
            <CImage src={product.image} width={350} />
          </CCol>

          <CCol md={9}>
            <h3>
              {product.title}
            </h3>
          </CCol>

          <CCol md={3} className="text-center">
            <h2>
              ${product.price}
            </h2>
            <p>
              {product.sold} Sold
              <br />{product.stock} Left
            </p>
          </CCol>

          <CCol md={12} className="text-justify">
            {product.desc}
          </CCol>
        </CRow>
      </CContainer>
    </>
  );

  const onSubmit = () => {
    console.log("Adding to basket", product)
  };

  return (
    <Modal title={`Product View`} body="Body" open={open} setOpen={setOpen} data={product} content={modelContent()} onSubmit={() => onSubmit()} onCancel={onCancel} submitText={"Add to Basket"} />
  )
}
