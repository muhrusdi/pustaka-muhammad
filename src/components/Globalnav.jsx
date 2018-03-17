import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Icon, Dropdown, Menu, Avatar, Badge } from 'antd'
import { css } from 'emotion' 
import Container from '../components/Container'

class Globalnav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false,
      showChart: false
    }
  }

  render() {
    let { toggle } = this.state
    let settingsDropdown = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="#">Profil</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="#">Settings</a>
        </Menu.Item>
      </Menu>
    )

    let chartDropdown = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="#">Profil</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="#">Settings</a>
        </Menu.Item>
      </Menu>
    )

    let rotate = toggle ? 180 : 0
    return (
      <Fragment>
        <nav ref="globalnav" className={css`
          position: fixed;
          left: 0;
          right: 0;
          top: 0;
          height: 60px;
          border-bottom: 1px solid #efefef;
          background: #fff;
          z-index: 99999;
        `}>
          <Container xl>
            <Row type="flex" align="middle" justify="space-between" className={css`
              height: 60px;
            `}>
              <Col span={6}>
                <span>MR</span>
              </Col>
              <Col span={12}>
                <div>
                  <form action="" className={css`
                    margin: 0;
                  `}>
                    <input type="text" placeholder="Search" className={css`
                      width: 100%;
                      border: none;
                      padding: 10px;
                      background: #efefef;
                      outline: none;
                    `} />
                  </form>
                </div>
              </Col>
              <Col span={6}>
                <Row type="flex" gutter={13} justify="end" align="middle">
                  <Col>
                    <Row type="flex" gutter={20} align="middle">
                      <Col>
                        <Dropdown overlay={chartDropdown} trigger={['click']} onVisibleChange={
                          (visible => this.setState({showChart: visible}))}
                          getPopupContainer={
                            () => this.refs.globalnav
                          }>
                          <Badge dot={this.state.showChart} count={99} className={css`
                            p {
                              font-size: 12px;
                            }
                          `}>
                            <Icon type="shopping-cart" className={css`
                              font-size: 25px;
                              color: #969696;
                              cursor: pointer;
                            `}/>
                          </Badge>
                        </Dropdown>
                      </Col>
                      <Col>
                        <Avatar>U</Avatar>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <div className={css`
                      width: 1px;
                      background: #e6e6e6;
                      height: 25px;
                    `}></div>
                  </Col>
                  <Col>
                    <Dropdown overlay={settingsDropdown} trigger={['click']} onVisibleChange={
                      (visible => this.setState({toggle: visible}))
                    } getPopupContainer={
                      () => this.refs.globalnav
                    }>
                    
                      <Icon type="down" className={css`
                        transition: transform .3s ease;
                        transform: rotateX(${rotate}deg);
                        cursor: pointer;
                      `}/>
                    </Dropdown>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </nav>
        <div className={css`height: 60px`}></div>
      </Fragment>
    )
  }
}

export default Globalnav