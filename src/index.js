import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import todoApp from './reducers'
import App from './components/App.jsx'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(todoApp, composeEnhancers(applyMiddleware(logger)))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
