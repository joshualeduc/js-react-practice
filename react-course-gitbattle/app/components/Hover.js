import React from 'react'

export default class Hover extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      hovering: false,
    }

    this.mouseOver = this.mouseOver.bind(this)
    this.mouseOut = this.mouseOut.bind(this)
  }

  mouseOver () {
    this.setState({
      hovering: true
    })
  }

  mouseOut () {
    this.setState({
      hovering: false
    })
  }

  //this.props.render could be used instead of children with commented code in Tooltip
  render () {
    return (
      <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        {this.props.children(this.state.hovering)}
      </div>
    )
  }
}
