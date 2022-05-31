import React from 'react'
import { CFooter } from '@coreui/react'

const Footer = () => {
  return (
    <CFooter>
      <div>
        Built By
        {" "}
        <a href="https://Suhaib.dev" target="_blank" rel="noopener noreferrer">
          Suhaib Ahmad
        </a>
        <span className="ms-1">&copy; 2022</span>
      </div>
      <div className="ms-auto">
        Based on template of
        {" "}
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          CoreUI
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(Footer)
