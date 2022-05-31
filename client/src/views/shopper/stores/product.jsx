import { CCol, CContainer, CFormInput, CImage, CInputGroup, CInputGroupText, CRow } from '@coreui/react';
import React, { useMemo, useState } from 'react';
import Modal from '../../../components/modal';
import { useDispatch, useSelector } from 'react-redux'

export default function Product({ product, onCancel }) {
  const dispatch = useDispatch()
  const basket = useSelector((state) => state.basket)

  const [open, setOpen] = useState(product?.id ? true : false)

  const modalContent = () => (
    <>
      <CContainer>
        <CRow >
          <CCol md={12} className="text-center">
            <CImage src={product.image} width={350} />
          </CCol>

          <CCol md={9}>
            <h3>
              {product.name}
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

    let newBasket = [...basket];
    let found = newBasket.find(item => item.id === product.id);

    found?.id ? newBasket = newBasket.map(item => item.id === found.id ? { id: item.id, count: item.count + 1 } : item) : newBasket = [...newBasket, { id: product.id, count: 1 }]

    dispatch({ type: 'setBasket', basket: newBasket })
  };

  return (
    <Modal title={`Product View`} body="Body" open={open} setOpen={setOpen} data={product} content={modalContent()} onSubmit={() => onSubmit()} onCancel={onCancel} submitText={"Add to Basket"} />
  )
}
