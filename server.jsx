import express from 'express'

const app = express()

app.use((req, res) => {
  const HTML = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Isomorphic React Redux</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="/build/bundle.js"></script>
  </body>
  </html>
  `

  res.end(HTML)
})

export default app
