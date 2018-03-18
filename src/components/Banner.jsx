import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Icon, Carousel } from 'antd'
import { css } from 'emotion' 
import Container from '../components/Container'

class Banner extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.refs.antCarousel.innerSlider.list.firstChild.style.height = '500px'
    }, 500)
  }
  render() {
    return (
      <div className={css`
        .slick-track {
          height: 0;
          overflow: hidden;
          transition: height .5s ease;
        }
        .slick-slide {
          text-align: center;
          line-height: 160px;
          background: #364d79;
          overflow: hidden;
          height: 500px;
        }
      `}>
        <Carousel ref="antCarousel">
          <div>
            <Row type="flex" align="middle" className={css`
              height: 500px;
            `}>
              <Col span={12}>
                <h1>sdf</h1>
              </Col>
              <Col span={12}>
                <h1>tes</h1>
              </Col>
            </Row>
          </div>
          <div>
            <Row type="flex" align="middle" className={css`
              height: 500px;
            `}>
              <Col span={12}>
                <h1>Muhammad Rusdi</h1>
              </Col>
              <Col span={12}>
                <h1>Muhammad Rusdi</h1>
              </Col>
            </Row>
          </div>
          <div>
            <Row type="flex" align="middle" className={css`
              height: 500px;
            `}>
              <Col span={12}>
                <h1>Muhammad Rusdi</h1>
              </Col>
              <Col span={12}>
                <h1>Muhammad Rusdi</h1>
              </Col>
            </Row>
          </div>
        </Carousel>
      </div>
    )
  }
}

export default Banner