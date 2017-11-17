import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import ScrollableAnchor from 'react-scrollable-anchor'
import logo from './draft1b.png'
import pilers from './pilers.svg'
import sunset from './sunset.svg'
import tree from './tree.svg'
import theatre from './theatre.png'

const FixedMenu = () => (
  <Container>
    <Menu fixed='top' size='massive' inverted
      style={{ opacity: 0.8 }} >
      <Container>
        <Menu.Item as='a' className="vertically fitted item" >
          <img src={logo} alt="Dev 35.9E" style={{ height: 50, width: 'auto' }} />
        </Menu.Item>
        <Menu.Item as='a'>About Us</Menu.Item>
        <Menu.Item as='a'>Contact</Menu.Item>
      </Container>
    </Menu>
  </Container>
)

export default class App extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })

  render() {
    const { visible } = this.state
    let windowH = window.innerHeight;

    return (
      <div>
        {visible ? <FixedMenu /> : null}

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            inverted
            textAlign='center'
            style={{
              backgroundImage: `url(${pilers})`,
              minHeight: windowH * 1.2,
              padding: '0em 0em',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundSize: 'cover'
            }}
            vertical
          >

            <Menu stackable borderless pointing size='massive'
              style={{ padding: '0em 6em', opacity: 0.9 }} >
              <Menu.Item as='a' className="vertically fitted item" >
                <img src={logo} alt="Dev 35.9E" style={{ height: 50, width: 'auto' }} />
              </Menu.Item>
              <Menu.Item as='a'>About Us</Menu.Item>
              <Menu.Item as='a'>Contact</Menu.Item>
            </Menu>

            <Container text>
              <Header
                as='h1'
                content='Imagine your Product!'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
              />
              <Header
                as='h2'
                content='Lets make it happen.'
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
              <Button href='#section1' size='huge' color='purple'>
                Get Started
                <Icon name='right arrow' />
              </Button>
            </Container>
          </Segment>
        </Visibility>
        <ScrollableAnchor id={'section1'}>
          <div style={{
            padding: '8em 0em',
            background: '#f2f4f4'
          }} >
            <Segment style={{ padding: '2em 0em' }} vertical>
              <Container text >
                <Header as='h3' style={{ fontSize: '2em' }}>Fullstack web-development made easy</Header>
                <p style={{ fontSize: '1.33em' }}>
                  You provide the idea and we build it. It's that simple. </p>
                <p>
                  We handle all the heavy lifting: coordination, management, and talent. </p>
                <p>
                  Regardless of what stage you are at, greenfield or refreshing a legacy codebase, we have the expertise to handle it.
                </p>
              </Container>
            </Segment>
            <Segment style={{ padding: '0em' }} vertical>
              <Grid celled='internally' columns='equal' stackable>
                <Grid.Row textAlign='center'>
                  <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                    <Header as='h3' style={{ fontSize: '2em' }}>San Francisco Quality at a fraction of the costs</Header>
                    <p style={{ fontSize: '1.33em' }}>-No longer do you have pick between price, quality, or convince</p>
                  </Grid.Column>
                  <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                    <Header as='h3' style={{ fontSize: '2em' }}>"Professionally trained, expert engineers"</Header>
                    <Header as='h3' style={{ fontSize: '2em' }}>We work with you every step of the way</Header>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
            <Container textAlign='center'  style={{ padding: '2em' }} >
            <Button href='#section3' size='huge' color='purple'>
            Find Out More
            <Icon name='right arrow' />
          </Button>
          </Container>
          </div>
        </ScrollableAnchor>

        <ScrollableAnchor id={'section3'}>        
          <Segment style={{
            padding: '8em 0em',
            backgroundImage: `url(${sunset})`,
            minHeight: windowH * 1.2,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
          }} vertical>
            <Grid container stackable verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Header as='h3' style={{ fontSize: '2em' }}>Fast Turnaround and Communication</Header>
                  <ul style={{ fontSize: '1.33em' }}>
                    <li>Offices in Silicon Valley and Jordan</li>
                    <li>We are always in your time zone</li>
                    <li>Real-time and asynchronous communication</li>
                  </ul>
                  <Header as='h3' style={{ fontSize: '2em' }}>Agile Practices</Header>
                  <ul style={{ fontSize: '1.33em' }}>
                    <li>We help you plan sprints.</li>
                    <li>Weekly big picture updates</li>
                    <li>Daily updates on Git, Assna, and Slack</li>
                  </ul>
                </Grid.Column>
                <Grid.Column floated='right' width={6}>
                  <Image
                    bordered
                    rounded
                    size='large'
                    src={theatre}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign='center'>
                  <Button size='huge' color='purple'> Ready?</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </ScrollableAnchor>


        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={4}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={4}>
                  <Header inverted as='h4' content='Services' />
                  <List link inverted>
                    <List.Item as='a'>Javascript</List.Item>
                    <List.Item as='a'>Backend</List.Item>
                    <List.Item as='a'>Project management</List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
          <Container style={{ padding: '3em 0em 0em 0em', color: 'grey', fontSize: '0.8em' }}>
            <p > All background images are derivative of photos by <a href='https://www.flickr.com/photos/jennyellenbrown'>Jenny Brown</a>, used under CC. All background images are licensed under CC BY by Henri Pietila.</p>
          </Container>
        </Segment>
      </div>
    )
  }
}