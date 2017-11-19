import React, { Component } from 'react'
import Landing from './components/Landing' 
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import AboutUs from './components/AboutUs';



export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
           <Route exact path='/' component={Landing}/>
           <Route exact path='/aboutUs' component={AboutUs}/>
        </Switch>
      </BrowserRouter>
    )
  }
}