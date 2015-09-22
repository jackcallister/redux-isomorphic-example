import React from 'react'
import ReactDOMServer from 'react-dom/server'
import createMemoryHistory from 'history/lib/createMemoryHistory'
import { Router } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../../shared/reducers'
import routes from '../../shared/components/routes'

export default (req, res, next) => {
  // Payload needed for Redux (rendering) and sending to client.
  const payload = { data: 'Hello, World' }

  const history = createMemoryHistory() // What about params etc.
  const store = createStore(reducers, payload)

  const app = React.createElement(Provider, {store: store},
    React.createElement(Router, {history: history, children: routes})
  )
  const html = ReactDOMServer.renderToString(app)

  res.render('index', {
    html: html,
    payload: JSON.stringify(payload)
  })
}
