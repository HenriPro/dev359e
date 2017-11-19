import React, { Component } from 'react'
import {
  Container,
  Segment,
  Header,
  List,
  Visibility
} from 'semantic-ui-react'
import TopMenu from './TopMenu'
import FixedMenu from './FixedMenu'



export default class PlayBook extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })

  render() {
    const { visible } = this.state
    return (
      <div>
        {visible ? <FixedMenu /> : null}

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <TopMenu />
          <div style={{
            padding: '2em 0em',
          }} >
            <Container text >
              <Header as='h3' style={{ fontSize: '2em', color: '#ff6600ff' }}>Our Playbook</Header>

              <Header as='h3' style={{ color: 'purple' }} >About Us</Header>
              <p>We are an international company focused on making the best web and mobile products. We partner with companies big and small with compatible vision.
              We leverage the the latest technologies, and agile development techniques to do this. </p>

              <Header as='h3' style={{ color: 'purple' }} >What separates us from others?</Header>
              <p>We view believe it is possible to both do business and do the right thing. We believe talent is not limited to a few global hotspots.
              Here at Dev35.9E we partner with ReBootKamp (RBK)  http://rbk.org/, to provide in house training in the latest technologies and Silicon Valley best practices.
              We offer the San Fransico Quality at a fraction of the price. We operate on a system where we pair industry experienced experts with senior developers and apprentices
              (clients are not billed for apprentice hours). </p>
              <p>Unlike other outsourcing “sweatshops”, we pride on ourselves on paying all of our developers a livable wage, and offer upward mobility.
              Brain drain is something avoidable even in the global economy. We hire women and refugees when ever possible.</p>
              <p>Unlike other outsourcing solutions, all of our employees are fluent in English, to avoid any language barrier.</p>
              <p>We have a Silicon Valley office because we believe in bridging cultures. Whenever possible face-to-face meetings are encouraged.
              We also use our Silicon Valley resources to keep tabs on the latest techniques, technologies, and industry trends. </p>
            </Container>
          </div>
        </Visibility>
        
        <div style={{
          padding: '2em 0em',
        }} >
          <Container text>
            <Header as='h3' style={{ color: 'purple' }} >Communication</Header>
            <p> The number one reason for failure for any project is failure of communication. From the first meeting clear expectations, goals, and user stories for projects are set.
              We work on an agile model.  https://en.wikipedia.org/wiki/Agile_software_development. Projects are organized into 2 day long sprints.
              Expect to be included on weekly big picture meetings. Daily progress can be seen with updates to Github and Asana. Our team is also always on slack.</p>

            <Header as='h3' style={{ color: 'purple' }} >Our Clients</Header>
            <p>We take on projects for a variety of companies, big and small. One thing that is always constant, is we only take on projects where we have confidence of success.
              For this reason, our initial evaluation is always free. Our aim is to build mutually beneficial relationships, not to just make a quick buck.</p>

            <Header as='h3' style={{ color: 'purple' }} >Process</Header>
            <List ordered>
              <List.Item>
                <List.Header>Planning</List.Header>
                <p>Before any coding starts we have to figure out what it is you need. This is where we figure out the scope of the project, what code/ design work already has been done, what
                    is important, and what is not.  We use user stories to hone in on features and flow. </p>
              </List.Item>

              <List.Item>
                <List.Header>Wireframes and Mockups</List.Header>
                <p>From user stories we go to we go to wireframe and mockups. You may already have these, but if not we will make them.
                    Either way this is a critical step to make sure we are all on the same page. Mockups are living documents, that are updated as changes to spec at any point in development are needed.
                  </p>
              </List.Item>

              <List.Item>
                <List.Header>Stack Choice</List.Header>
                <p>Only after user stories and mockups should stack be considered. For greenfield projects our general preference is for web apps is Express https://expressjs.com/ and Node.js https://nodejs.org/ for backend,
                    and React https://reactjs.org/ or Angular https://angularjs.org/ for frontend. For mobile our preference is for React Native https://facebook.github.io/react-native/,
                    unless native code is an absolute must. By using a stack we have strong familiarity with, we can leverage our experience for your cost savings.
                    Of course stack choice is a case by case decision, and for a particular project, our choice may differ.
                </p>
              </List.Item>

              <List.Item>
                <List.Header>Code</List.Header>
                <p>Our goal is to always focus on MVP (Minimum Viable Product) first, this way you have working product you can test and get feedback on, without committing too many resources.
                  In most cases you can expect a MVP within a month. Whenever practical we use TDD to create code with the least bugs possible. From there more features and improvements can be added.
                </p>
              </List.Item>

              <List.Item>
                <List.Header>Deployment in the field.</List.Header>
                <p>Our preference is to work with modern cloud deployment tactics to insure maximum uptime, speed, and minimal cost. Depending on your  needs, you may wish to handle this part yourself.
                 In either case, the end goal of any code is to deliver a useable product to customers.
                </p>
              </List.Item>

              <List.Item>
                <List.Header>On going support.</List.Header>
                <p>Unlike many outsourcing shops, whose code is unextendable and verbose. Our code is by nature written to be DRY(https://en.wikipedia.org/wiki/Don%27t_repeat_yourself )
                and extendable. With us you don’t need to worry about vendor lock in, and you are free to support the code we have written yourself.
                However if you want, we can provide ongoing support as well.
                </p>
              </List.Item>

            </List>

          </Container>
        </div>
      </div>
    )
  }
}
