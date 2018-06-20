import React from 'react'
import {Switch, Route} from 'react-router-dom'
import styled, {injectGlobal} from 'styled-components'
import styledNormalize from 'styled-normalize'
import Home from './containers/home'
import Error from './containers/error'

injectGlobal`
  ${styledNormalize}

  html {
    width: 100%;
    height: 100%;
  }
  body, #app {
    width: 100%;
    height: 100%;
  }
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const App = () => (
  <Wrapper>
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
  </Wrapper>
)

export default App
