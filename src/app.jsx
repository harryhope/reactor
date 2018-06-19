import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Helmet} from 'react-helmet'

const Home = props => (
  <div>
    <Helmet>
      <title>Reactor Home</title>
    </Helmet>
    Welcome Home
  </div>
)

const Error = () => (
  <div>Looks like a 404</div>
)

const App = () => (
  <div>
    <Switch>
      <Route
        exact
        path='/'
        component={Home}
      />
      <Route
        path='*'
        component={Error}
      />
    </Switch>
  </div>
)

export default App
