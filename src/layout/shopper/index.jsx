import React from 'react'
import { Content, Footer, Header } from './components'

export default function ShopperLayout() {
  return (
    <div>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header />
        <div className="body flex-grow-1 px-3">
          <Content />
        </div>
        <Footer />
      </div>
    </div>
  )
}
