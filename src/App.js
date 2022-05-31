import React, { Component, Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse">Loading</div>
  </div>
)

// Containers

// Pages
const Landing = lazy(() => import('./views/landing'))
const Registeration = lazy(() => import('./views/registeration'))
const Layout = lazy(() => import('./layout/seller'))

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/" name="Landing" element={<Landing />} />
            <Route exact path="/register" name="Register Page" element={<Registeration />} />
            <Route path="*" name="Home" element={<Layout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
