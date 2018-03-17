import React, { Component, Fragment } from 'react'
import Link from 'gatsby-link'
import { Carousel, Row, Col, Icon } from 'antd'
import  { css } from 'emotion'
import Container from '../components/Container'
import img from '../images/imagekitab.jpg'

class Grid extends Component {
  render() {
    let flip = this.props.flip
    return (
      <div className={css`margin-top: 10px`}>
        <Container xl>
          <div className={css`
            display: grid;
            grid-gap: 10px;
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 500px;
          `}>
            <div className={css`
              grid-row: 1;
              grid-column: ${flip ? '3' : 'inherit'}
            `}>
              <div className={css`
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%
              `}>
                <h2 className={css`
                  font-size: 40px;
                  line-height: 1.05;
                  font-weight: 500;
                `}>{this.props.tile}</h2>
              </div>
            </div>
            <div className={css`
              background: #f2f2f2;
              grid-row: span 2;
              grid-column: span 2;
            `}>
              <div className={css`position: relative; height: 100%`}>
                <div className={css`
                  position: absolute;
                  left: 10px;
                  right: 10px;
                  top: 10px;
                  bottom: 170px;
                  text-align: center;
                `}>
                  <img className={css`height: 100%;`} src={img} alt=""/>
                </div>
                <div className={css`
                  position: absolute;
                  left: 10px;
                  right: 10px;
                  height: 150px;
                  bottom: 10px;
                  text-align: center;
                `}>
                  <div className={css`margin-bottom: 15px`}>
                    <span className={css`padding: 4px; color: #03a9f4`}>Baru</span>
                  </div>
                  <h3 className={css`
                    font-size: 18px
                  `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h3>
                  <p className={css`font-size: 16px`}>Rp. 20.000.000</p>
                </div>
              </div>
            </div>
            <div className={css`
              background: #f2f2f2;
              grid-row: 2;
              grid-column: ${flip ? '3' : 'inherit'}
            `}>
              <div className={css`position: relative; height: 100%`}>
                <div className={css`
                  position: absolute;
                  left: 10px;
                  right: 10px;
                  top: 10px;
                  bottom: 170px;
                  text-align: center;
                `}>
                  <img className={css`height: 100%;`} src={img} alt=""/>
                </div>
                <div className={css`
                  position: absolute;
                  left: 10px;
                  right: 10px;
                  height: 150px;
                  bottom: 10px;
                  text-align: center;
                `}>
                  <div className={css`margin-bottom: 15px`}>
                    <span className={css`padding: 4px; color: #03a9f4`}>Baru</span>
                  </div>
                  <h3 className={css`
                    font-size: 18px
                  `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h3>
                  <p className={css`font-size: 16px`}>Rp. 20.000.000</p>
                </div>
              </div>
            </div>
            <div className={css`
              background: #f2f2f2;
            `}>
              <div className={css`position: relative; height: 100%`}>
                <div className={css`
                  position: absolute;
                  left: 10px;
                  right: 10px;
                  top: 10px;
                  bottom: 170px;
                  text-align: center;
                `}>
                  <img className={css`height: 100%;`} src={img} alt=""/>
                </div>
                <div className={css`
                  position: absolute;
                  left: 10px;
                  right: 10px;
                  height: 150px;
                  bottom: 10px;
                  text-align: center;
                `}>
                  <div className={css`margin-bottom: 15px`}>
                    <span className={css`padding: 4px; color: #03a9f4`}>Baru</span>
                  </div>
                  <h3 className={css`
                    font-size: 18px
                  `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h3>
                  <p className={css`font-size: 16px`}>Rp. 20.000.000</p>
                </div>
              </div>
            </div>
            <div className={css`
              background: #f2f2f2;
            `}>
              <div className={css`position: relative; height: 100%`}>
                <div className={css`
                  position: absolute;
                  left: 10px;
                  right: 10px;
                  top: 10px;
                  bottom: 170px;
                  text-align: center;
                `}>
                  <img className={css`height: 100%;`} src={img} alt=""/>
                </div>
                <div className={css`
                  position: absolute;
                  left: 10px;
                  right: 10px;
                  height: 150px;
                  bottom: 10px;
                  text-align: center;
                `}>
                  <div className={css`margin-bottom: 15px`}>
                    <span className={css`padding: 4px; color: #03a9f4`}>Baru</span>
                  </div>
                  <h3 className={css`
                    font-size: 18px
                  `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h3>
                  <p className={css`font-size: 16px`}>Rp. 20.000.000</p>
                </div>
              </div>
            </div>
            <div className={css`
              background: #f2f2f2;
            `}>
              <div className={css`position: relative; height: 100%`}>
                <div className={css`
                  position: absolute;
                  left: 10px;
                  right: 10px;
                  top: 10px;
                  bottom: 170px;
                  text-align: center;
                `}>
                  <img className={css`height: 100%;`} src={img} alt=""/>
                </div>
                <div className={css`
                  position: absolute;
                  left: 10px;
                  right: 10px;
                  height: 150px;
                  bottom: 10px;
                  text-align: center;
                `}>
                  <div className={css`margin-bottom: 15px`}>
                    <span className={css`padding: 4px; color: #03a9f4`}>Baru</span>
                  </div>
                  <h3 className={css`
                    font-size: 18px
                  `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h3>
                  <p className={css`font-size: 16px`}>Rp. 20.000.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className={css`
            text-align: center;
            padding: 20px 0;
          `}>
            <a href="#"><span>Lihat semua promo </span><Icon type="right" className={css`font-size: 12px`} /></a>
          </div>
        </Container>
      </div>
    )
  }
}

export default Grid