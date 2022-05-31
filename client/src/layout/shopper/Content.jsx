import { CContainer, CSpinner } from '@coreui/react'
import React, { Suspense, memo } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import routes from '../../routes/shopper'
import Loading from '../../components/loading'

const Content = () => {
  return (
    <CContainer lg>
      <Suspense fallback={<Loading />}>
        <Routes>
          {routes.map((route, i) => {
            return (
              route.element && (
                <Route
                  key={i}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default memo(Content)
