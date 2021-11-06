import React from 'react'
import Content from './Content'
import Footer from './Footer'
import Hero from './Hero'
import NavBar from './NavBar'

const Layout = () => {
    return (
        <>
          <NavBar />
          <Hero />
          <Content />
          <Footer />  
        </>
    )
}

export default Layout
