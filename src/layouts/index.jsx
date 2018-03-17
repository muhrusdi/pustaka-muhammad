import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Globalnav from '../components/Globalnav'
import '../sass/app.scss'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Globalnav/>
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
