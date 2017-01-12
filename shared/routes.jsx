import React from 'react'
import {Route, Redirect} from 'react-router'

import App from 'components/App'
import Page from 'components/Page'
import Home from 'components/Home'
import LoginPage from 'components/LoginPage'
export default (
  <Route component={App}>
    <Route path="/" component={Page}>
      <Route path='login' component={LoginPage} />
      <Route path="home" component={Home} />
    </Route>
    <Redirect from="*" to="/" />
  </Route>
)
