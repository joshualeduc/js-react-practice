import React from 'react'
import Navbar from 'components/Navbar'
import Comments from 'components/Comments'
import User from 'components/User'
import NewsList from 'components/NewsList'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import 'App.css'

function App () {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'><NewsList /></Route>
        <Route path='/comments'><Comments /></Route>
        <Route path='/user'><User /></Route>
      </Switch>
    </Router>
  )
}

export default App
