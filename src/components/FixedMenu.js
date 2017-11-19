import React, { Component } from 'react'
import {
    Container,
    Menu,
  } from 'semantic-ui-react'
import logo from './../assets/draft1b.png'
  

export default class TopMenu extends Component {
    render() {
      return (
        <Container>
        <Menu fixed='top' size='massive' inverted
          style={{ opacity: 0.8 }} >
          <Container>
            <Menu.Item as='a' className="vertically fitted item" >
              <img src={logo} alt="Dev 35.9E" style={{ height: '2.5em', width: 'auto' }} />
            </Menu.Item>
            <Menu.Item as='a'>About Us</Menu.Item>
            <Menu.Item as='a'>Contact</Menu.Item>
          </Container>
        </Menu>
      </Container>
      )
    }
  }
  