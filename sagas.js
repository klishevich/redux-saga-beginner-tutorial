import { takeEvery, delay } from 'redux-saga'
import { put } from 'redux-saga/effects'

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield* takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* getLists() {
  yield put({ type: 'RECIEVE_LISTS' })
}

export function* watchGetLists() {
  yield* takeEvery('GET_LISTS', getLists)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync(),
    watchGetLists()
  ]
}

export function* helloSaga() {
  console.log('Hello Sagas!')
}