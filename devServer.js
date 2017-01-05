import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {match, RouterContext} from 'react-router'
import routes from 'routes'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import * as reducers from 'reducers'

// webpack dev server configuration imports
import config from './webpack.config'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const app = express()
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: config.output.publicPath,
  stats: {
    color: true,
  }
}))

app.use(webpackHotMiddleware(compiler, {
  path: '/__webpack_hmr',
}))

app.use((req, res) => {
  const reducer = combineReducers(reducers)
  const store = createStore(reducer)

  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if(error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const InitialComponent = (
        <MuiThemeProvider>
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        </MuiThemeProvider>
      )
      const componentHTML = renderToString(InitialComponent)
      const initialState = store.getState()
      const HTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <title>Isomorphic React Redux</title>
          <script type="application/javascript">
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
          </script>
        </head>
        <body>
          <div id="app">${componentHTML}</div>
          <script src="static/bundle.js"></script>
        </body>
        </html>
      `
      res.end(HTML)
      // res.status(200).send(renderToString(<RouterContext {...renderProps} />))
    } else {
      res.status(404).send('Not found')
    }
  })
})

// app.use((req, res) => {
//   const HTML = `
//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <title>Isomorphic React Redux</title>
//   </head>
//   <body>
//     <div id="app"></div>
//     <script src="/build/bundle.js"></script>
//   </body>
//   </html>
//   `
//
//   res.end(HTML)
// })

export default app
