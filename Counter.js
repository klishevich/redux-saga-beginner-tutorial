/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'
import List from './List'

export default class Counter extends Component {
render() {
  const { stateData, onIncrement, onDecrement, onIncrementAsync, onGetLists, lists } = this.props

  return (
    <div>
      <button onClick={onIncrement}>
        Increment
      </button>
      {' '}
      <button onClick={onIncrementAsync}>
        Increment after 1 second
      </button>
      {' '}
      <button onClick={onDecrement}>
        Decrement
      </button>
      <hr />
      <div>
        Clicked: {stateData.cnt} times
      </div>
      <hr />
      <button onClick={onGetLists}>
        GetLists
      </button>
      <div>
        {lists[0] ? lists[0].id : null}
      </div>
      <div>
        { lists.map((item) => (
            <List key={ item.id } list={ item } />
          )) }
      </div>
    </div>
    )
  }
}

Counter.propTypes = {
  stateData: PropTypes.object.isRequired,
  lists: PropTypes.array.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}
