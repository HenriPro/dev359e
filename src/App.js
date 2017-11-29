import React, { Component } from 'react'
import Landing from './components/Landing' 
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import PlayBook from './components/PlayBook'



export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
           <Route exact path='/' component={Landing}/>
           <Route exact path='/PlayBook' component={PlayBook}/>
        </Switch>
      </BrowserRouter>
    )
  }
}