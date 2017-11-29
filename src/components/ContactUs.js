import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Form,
  Header,
  Modal,
  Button,
  Dimmer,
  Loader
} from 'semantic-ui-react'
import TopMenu from './TopMenu'

export default class ContactUs extends Component {
  state = {

    name: '',
    _replyto: '',
    message: '',
    modalOpen: false,
    loading: false,
    sentModalOpen: false
  }

  handleSubmit = () => {
    console.log(this.state);
    const formData = {name : this.state.name,
                      _replyto : this.state._replyto,
                      message : this.state.message};
    console.log(formData);
    this.setState({ loading: true });
    fetch('//formspree.io/henrismail@gmail.com', {
      method: 'post',
      mode: 'cors',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then( (response) => {
      if (response.ok) {
        console.log(response);
        this.setState({ loading: false });        
        this.setState({ sentModalOpen: true });
      } else {
        console.log(response.status);
        this.setState({ loading: false });
      }
    }).catch( (error) => {
      //updateMsg(contactForm, msgError);
      console.log(error);
      this.setState({ loading: false });
    });
  }

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  
  sentModal = () => {
      return (
        <Modal open={this.state.sentModalOpen}>
          <Modal.Header>Message Sent</Modal.Header>
          <Modal.Content><p>We will email you back soon</p></Modal.Content>
          <Modal.Actions>
          <Button icon='check' color='green' content='Okay' onClick={() => this.setState({sentModalOpen : false, modalOpen : false})} />
          </Modal.Actions>
        </Modal>
      )
    
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  render() {
    const { name, _replyto, message, loading, modalOpen } = this.state;
    return (
      <div>
        <Modal open={modalOpen}
          onClose={this.toggleModal}
          closeIcon
          trigger={<div onClick={this.toggleModal}>Contact</div>} >
          <Header icon='mail' content='Contact Us' />
          <Modal.Content>
            <Dimmer active={loading}>
              <Loader>Sending Message</Loader>
            </Dimmer>

            <Form onSubmit={this.handleSubmit}>
              <Form.Input type="text"
                name="name"
                placeholder='John Doe'
                label="Your Name:"
                value={name} onChange={this.handleChange} />
              <Form.Input type="email"
                name="_replyto"
                placeholder='yourName@yourCompany.com'
                label="Your Email:"
                value={_replyto} onChange={this.handleChange} />
              <Form.TextArea type='text'
                name='message'
                typeplaceholder='Tell us more'
                value={message} label='Tell us about your project:'
                onChange={this.handleChange} />
              <Form.Button color='purple'>Submit</Form.Button>
            </Form>
            {this.sentModal()}
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}