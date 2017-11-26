import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Container,
    Menu,
    Form,
    TextArea
  } from 'semantic-ui-react'
import TopMenu from './TopMenu'  

export default class ContactUs extends Component {
    state = {}
  
    handleChange = (e, { value }) => this.setState({ value })

    render() {
      return (
        <div>
          <TopMenu />
          <Container text>
            <Form action="https://formspree.io/henrismail@gmail.com"
                  method="POST">
                <Form.Input type="text" name="name" label="Your Name:"/>
                <Form.Input type="email" name="_replyto" label="Your Email:"/>
                <TextArea placeholder='Tell us more' label='Tell us about your project:' />                
                <Form.Button>Submit</Form.Button>                
            </Form> 
        </Container>
      </div>
      )
    }
  }