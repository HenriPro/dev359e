import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Container,
    Menu,
  } from 'semantic-ui-react'
import logo from './../assets/draft1b.png'
  

export default class FixedMenu extends Component {
    render() {
      return (
        <Menu stackable borderless pointing size='massive'
        style={{ padding: '0em 6em', opacity: 0.9 }} >
        <Menu.Item as='a' className="vertically fitted item" >
          <Link to='/'>
            <img src={logo} alt="Dev 35.9E" style={{ height: '3em', width: 'auto' }} />
          </Link>
        </Menu.Item>
        <Menu.Item as='a'><Link to='/aboutUs'>About Us</Link></Menu.Item>
        <Menu.Item as='a'>Contact</Menu.Item>
      </Menu>
      )
    }
  }
  