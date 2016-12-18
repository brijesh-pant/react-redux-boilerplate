import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'
import routes from 'routes'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { fromJS } from 'immutable'

import * as reducers from 'reducers'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let initialState = window.__INITIAL_STATE__

Object.keys(initialState).
forEach(key => {
  initialState[key] = fromJS(initialState[key])
})

const reducer = combineReducers(reducers)
const store = createStore(reducer, initialState)

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
)
