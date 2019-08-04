import React, { Component } from 'react'
import "./Home.css"

class Home extends Component {

  render() {
    return (
      <div className="main-body">
        <h1>Enter a City and State</h1>
        <input type="text"/>
        <button className="button">Click Me</button>
      </div>
    )
  }
}

export default Home
