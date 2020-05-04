import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Top</Link></li>
        <li><Link to='/'>New</Link></li>
        <li><Link to='/user'>User</Link></li>
        <li><Link to='/comments'>Comments</Link></li>
      </ul>
      <span role='img' aria-label='flashlight'>🔦</span>
    </nav>
  )
}
