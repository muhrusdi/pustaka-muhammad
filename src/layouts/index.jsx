import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

class App extends Component {
  render() {
    return (
      <Fragment>
        {
          this.props.children()
        }
      </Fragment>
    )
  }
}

App.propTypes = {
  children: PropTypes.func,
}

export default App
