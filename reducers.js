export default function counter(state = { cnt: 0, lists: []}, action) {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {
        cnt: state.cnt + 1
      })
    case 'INCREMENT_IF_ODD':
      return Object.assign({}, state, {
        cnt: (state.cnt % 2 !== 0) ? state.cnt + 1 : state.cnt
      })
    case 'DECREMENT':
      return Object.assign({}, state, {
        cnt: state.cnt - 1
      })
    case 'RECIEVE_LISTS':
      console.log('test')
      return Object.assign({}, state, {
        lists: [{"id":1,"name":"Good Deals","order":1,"created_at":"2016-07-03T12:54:19.992Z","updated_at":"2016-07-03T12:54:19.992Z"},{"id":2,"name":"Bad Deals","order":2,"created_at":"2016-07-03T12:54:20.002Z","updated_at":"2016-07-03T12:54:20.002Z"},{"id":3,"name":"Neutral Deals","order":3,"created_at":"2016-07-03T12:54:20.004Z","updated_at":"2016-07-03T12:54:20.004Z"},{"id":4,"name":"Rails5 API","order":5,"created_at":"2016-07-03T12:59:39.432Z","updated_at":"2016-07-03T12:59:39.432Z"},{"id":7,"name":"After CSS Add","order":55,"created_at":"2016-07-07T20:02:32.395Z","updated_at":"2016-07-07T20:02:32.395Z"},{"id":8,"name":"qwe","order":1,"created_at":"2016-07-07T20:05:52.151Z","updated_at":"2016-07-07T20:05:52.151Z"}]
      })
    default:
      return state
  }
}
