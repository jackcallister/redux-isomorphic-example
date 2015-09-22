import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import reducers from '../shared/reducers'
import routes from '../shared/components/routes'

const history = createBrowserHistory()
const store = createStore(reducers, window.__DATA__)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history} children={routes}/>
    </Provider>,
    document.getElementById('app')
  )
})
