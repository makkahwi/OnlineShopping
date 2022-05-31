import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loading from './components/loading'
import './scss/style.scss'

// Pages
const Landing = lazy(() => import('./views/landing'))
const Registeration = lazy(() => import('./views/registeration'))
const Layout = lazy(() => import('./layout/seller'))

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
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
