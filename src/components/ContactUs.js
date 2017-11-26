import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Container,
    Menu,
    Form,
    Header
  } from 'semantic-ui-react'
import TopMenu from './TopMenu'  

export default class ContactUs extends Component {
    state = {
      name: '',
      _replyto: '',
      message: ''
    }

    handleSubmit = () => {
      console.log(this.state)
      fetch('//formspree.io/henrismail@gmail.com', {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        if (!response.ok) {
          //updateMsg(contactForm, msgError);
          console.log(response.statusText);
        }
        //updateMsg(contactForm, msgSuccess);
        //return Promise.resolve(response)
        console.log('should be okay...')
        console.log(response);
      }).catch(function (error) {
        //updateMsg(contactForm, msgError);
        console.log(error);
      });
    }
  
    handleChange = (e, { name, value }) => this.setState({ [name]: value }) 

    render() {
      const {name, _replyto, message} = this.state;
      return (
        <div>
          <TopMenu />
          <Container text>
          <Header as='h1' color='purple'>Contact Us</Header>

            <Form onSubmit={this.handleSubmit}>
                <Form.Input type="text"
                            name="name"
                            placeholder='John Doe'
                            label="Your Name:"
                            value={name} onChange={this.handleChange}/>
                <Form.Input type="email"
                            name="_replyto"
                            placeholder='yourName@yourCompany.com'
                            label="Your Email:"
                            value={_replyto} onChange={this.handleChange}/>
                <Form.TextArea type='text'
                              name='message'
                              typeplaceholder='Tell us more'
                              value={message} label='Tell us about your project:'
                              onChange={this.handleChange} />              
                <Form.Button>Submit</Form.Button>                
            </Form> 
        </Container>
      </div>
      )
    }
  }