import React from 'react'

export default class Hover extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      hovering: false
    }

    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
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

  // this.props.render could be used instead of children with commented code in Tooltip
  render () {
    return (
      <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        {this.props.children(this.state.hovering)}
      </div>
    )
  }
}
