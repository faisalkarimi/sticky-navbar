import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [isActive, setIsActive] = useState(false)
  
  const handleClick = (e) => {
    e.target.className= 'current'
  }

  const handleScroll = () => {
    const scrollTop = window.pageYOffset
    if (scrollTop > 0) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

    return (
        <nav className={isActive ? "nav active" : "nav"}>
        <div className="container">
          <h1 className="logo"><Link to="/">Faisal Karimi</Link></h1>
          <ul onClick={handleClick}>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/about" >About</Link></li>
            <li><Link to="/projects" >Projects</Link></li>
            <li><Link to="/hobby" >Hobby</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
          </ul>
        </div>
      </nav>
    )
}

export default NavBar
