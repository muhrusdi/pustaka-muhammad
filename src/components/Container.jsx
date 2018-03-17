import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion' 

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 992
    }
    this.setMaxWidth = this.setMaxWidth.bind(this)
  }

  componentWillMount() {
    this.setMaxWidth()
  }

  setMaxWidth() {
    if (this.props.xl) {
      this.setState({
        width: 1200
      })
    } else if (this.props.md) {
      this.setState({
        width: 768
      })
    }
  }
  render() {
    return (
      <div className={css`
        max-width: ${this.state.width}px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 16px;
        padding-right: 16px;
      `}>
        {
          this.props.children
        }
      </div>
    )
  }
}

export default Container