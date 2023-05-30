// this is an example of a higher order component, render prop comonents like hover.js are usually better
import React from 'react'

export default function withHover (Component, propName = 'hovering') {
  return class WithHover extends React.Component {
    constructor (props) {
      super(props)

      this.state = {
        hovering: false
      }

      this.mouseOver = this.mouseOver.bind(this)
      this.mouseOut = this.mouseOut.bind(this)
    }

    handleMouseOver () {
      this.setState({
        hovering: true
      })
    }

    handleMouseOut () {
      this.setState({
        hovering: false
      })
    }

    render () {
      const props = {
        [propName]: this.state.hovering,
        ...this.props
      }

      return (
        <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
          <Component {...props} />
        </div>
      )
    }
  }
}
