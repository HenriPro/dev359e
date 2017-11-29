import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Menu,
  } from 'semantic-ui-react'
import ContactUs from './ContactUs'
import logo from './../assets/draft1b.png'
  

export default class TopMenu extends Component {
    state = { conatactIsOpen: false}

    toggleContact = () => this.setState({ contactIsOpen: !this.state.conatactIsOpen })

    render() {
      return (
        <div>
          <Menu stackable borderless pointing size='massive'
          style={{ padding: '0em 6em', opacity: 0.9 }} >
          <Menu.Item  className="vertically fitted item" >
            <Link to='/'>
              <img src={logo} alt="Dev 35.9E" style={{ height: '3em', width: 'auto' }} />
            </Link>
          </Menu.Item>
          <Menu.Item ><Link to='/PlayBook' style={{color: 'purple'}}>Play Book</Link></Menu.Item>
          <Menu.Item style={{color: 'purple'}}> 
            <ContactUs />
          </Menu.Item> 
          
          </Menu>
        </div>
      )
    }
  }
  