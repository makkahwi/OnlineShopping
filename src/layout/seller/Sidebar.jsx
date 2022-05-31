import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import navigation from '../../_nav'
import { SidebarNav } from './SidebarNav'

const Sidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      colorScheme="light"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <Link to="/" className='text-white' style={{ textDecoration: "None" }}>
          <h4>VeganMegan</h4>
        </Link>
      </CSidebarBrand>

      <CSidebarNav>
        <SimpleBar>
          <SidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>

      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default memo(Sidebar)
