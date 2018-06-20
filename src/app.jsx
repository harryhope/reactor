import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import styled, {injectGlobal} from 'styled-components'

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

injectGlobal`
  html {
    width: 100%;
    height: 100%;
  }
  body {
    width: 100%;
    height: 100%;
  }
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const App = () => (
  <Container>
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
  </Container>
)

export default App
