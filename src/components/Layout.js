import React from 'react'
import NavBar from './NavBar'

import Footer from './Footer'

const Layout = ({onMenuItemClick ,children}) => {
    return (
        <>
          <NavBar onClick={onMenuItemClick}/>
          {children}
          <Footer />  
        </>
    )
}

export default Layout
