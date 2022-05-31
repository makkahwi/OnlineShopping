import { CSpinner } from '@coreui/react'
import React from 'react'

export default function Loading() {
  return (
    <div className="pt-3 text-center">
      <CSpinner color="success" />
      <br />
      <h4 className='text-success'>Loading</h4>
    </div>
  )
}
