import React, { Component, Fragment } from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'
import Container from '../components/Container'
import Banner from '../components/Banner'
import Grid from '../components/Grid'

class Index extends Component {
  render() {
    return (
      <Fragment>
        <Banner/>
        <Grid tile="Promo Kitab Asli"/>
        <Grid flip tile="Promo Buku Aqidah"/>
      </Fragment>
    )
  }
}

export default Index
