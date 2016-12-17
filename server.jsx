import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {match, RouterContext} from 'react-router'
import routes from 'routes'

const app = express()

app.use((req, res) => {
  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if(error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const InitialComponent = (
        <RouterContext {...renderProps} />
      )
      const componentHTML = renderToString(InitialComponent)
      const HTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <title>Isomorphic React Redux</title>
        </head>
        <body>
          <div id="app">${componentHTML}</div>
          <script src="/bundle.js"></script>
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
