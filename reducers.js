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
        lists: action.data 
      })
    default:
      return state
  }
}
