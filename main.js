import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Counter from './Counter'
import reducer from './reducers'

import rootSaga from './sagas'

const action = type => store.dispatch({type})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

function render() {
  ReactDOM.render(
    <Counter
      stateData={store.getState()}
      lists={store.getState().lists}
      onIncrement={() => action('INCREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
      onDecrement={() => action('DECREMENT')}
      onGetLists={() => action('GET_LISTS')} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
