import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loading from './components/loading'
import './scss/style.scss'
import { useDispatch, useSelector } from 'react-redux'

const Landing = lazy(() => import('./views/landing'))
const Registeration = lazy(() => import('./views/registeration'))
const SellerLayout = lazy(() => import('./layout/seller'))
const ShopperLayout = lazy(() => import('./layout/shopper'))

export default function App() {
  const jwtToken = useSelector((state) => state.jwtToken)
  const seller = useSelector((state) => state.seller)

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {jwtToken?.length > 20 ? (
            <Route path="*" name="Home" element={seller ? <SellerLayout /> : <ShopperLayout />} />
          ) : (
            <>
              <Route exact path="/" name="Landing" element={<Landing />} />
              <Route exact path="/register" name="Register Page" element={<Registeration />} />
            </>
          )}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
};
