import { takeEvery, delay, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'



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
  try {
    var res
    yield fetch('https://airhosts.firebaseio.com/bookings.json').then(function(response) { 
      // Convert to JSON
      return response.json();
    }).then(function(j) {
    // Yay, `j` is a JavaScript object
      console.log('j',j); 
      res = j
    });
    const data = res
    yield put({type: 'RECIEVE_LISTS', data})
  } catch (error) {
    yield put({type: 'RECIEVE_LISTS', error})
  }
}

export function* watchGetLists() {
  yield* takeEvery('GET_LISTS', getLists)
}

export function* fetchData(action) {
   try {
      const data = yield call(Api.fetchUser, action.payload.url)
      yield put({type: "FETCH_SUCCEEDED", data})
   } catch (error) {
      yield put({type: "FETCH_FAILED", error})
   }
}

function* watchFetchData() {
  yield* takeLatest('FETCH_REQUESTED', fetchData)
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