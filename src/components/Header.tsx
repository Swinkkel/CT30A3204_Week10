import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <h1>Week 10</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <button id="fi">FI</button>
            <button id="en">EN</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header