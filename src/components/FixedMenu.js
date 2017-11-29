import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Menu,
} from 'semantic-ui-react'
import ContactUs from './ContactUs'
import logo from './../assets/draft1b.png'


export default class FixedMenu extends Component {
  render() {
    return (
      <Container>
        <Menu fixed='top' borderless size='massive' inverted
          style={{ padding: '0em 6em', opacity: 0.95 }} >
          <Menu.Item className="vertically fitted item" >
            <Link to='/'>
              <img src={logo} alt="Dev 35.9E" style={{ height: '2.5em', width: 'auto' }} />
            </Link>
          </Menu.Item>
          <Menu.Item ><Link to='/PlayBook' style={{ color: 'purple' }}>Play Book</Link></Menu.Item>
          <Menu.Item style={{ color: 'purple' }}>
            <ContactUs />
          </Menu.Item>       
        </Menu>
      </Container>
    )
  }
}
