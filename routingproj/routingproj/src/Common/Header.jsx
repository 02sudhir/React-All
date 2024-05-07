import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div><h1>Header</h1>
    <nav>
        <ul>
            <li><Link to={'/'}> Home</Link></li>
            <li><Link to={'/about'} >About</Link></li>
            <li><Link to={'/Courses'} >Courses</Link></li>
            <li><Link to={'/blog'} >Blog Details</Link></li>
        </ul>
    </nav></div>
  )
}

export default Header