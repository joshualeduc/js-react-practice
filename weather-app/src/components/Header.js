import React, { Component } from 'react'
import './Header.css'

class Header extends Component {

  render() {

    return (
      <header className="header">
        <div>
          <h1>Main Title</h1>
        </div>
        <div>
          <input type="text" placeholder="Search Term" className="input-header" />
          <button className="button">Click Me</button>
        </div>
      </header>
    )
  }
}

export default Header
