import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Icon, Carousel } from 'antd'
import { css } from 'emotion' 
import Container from '../components/Container'

class Banner extends Component {
  render() {
    return (
      <div className={css`
        .slick-slide {
          text-align: center;
          height: 500px;
          line-height: 160px;
          background: #364d79;
          overflow: hidden;
        }
      `}>
        <Carousel>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
      </div>
    )
  }
}

export default Banner