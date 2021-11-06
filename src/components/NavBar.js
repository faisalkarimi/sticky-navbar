import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const [isActive, setIsActive] = useState(false)

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
          <h1 className="logo"><NavLink to="/">Faisal Karimi</NavLink></h1>
          <ul>
            <li><NavLink to="#" className="current">Home</NavLink></li>
            <li><NavLink to="#">About</NavLink></li>
            <li><NavLink to="#">Projects</NavLink></li>
            <li><NavLink to="#">Hobby</NavLink></li>
            <li><NavLink to="#">Contact</NavLink></li>
          </ul>
        </div>
      </nav>
    )
}

export default NavBar
