import {
  CCard,
  CCardBody,
  CCardHeader
} from '@coreui/react';
import React from 'react';

export default function Content({ title, content }) {

  return (
    <CCard className="mb-4">
      <CCardHeader className='p-3'>
        <h3>{title}</h3>
      </CCardHeader>

      <CCardBody>
        {content}
      </CCardBody>
    </CCard>
  )
}
