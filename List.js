/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'

export default class List extends Component {
  render() {
    const { list } = this.props
    return (
      <div>
        <div>
          <span><b>Id:</b></span>
         <span>{list.id}</span>
        </div>        
        <div>
          <span><b>Name:</b></span>
          <span>{list.name}</span>
        </div>
      </div>
    )
  }
}

List.propTypes = {
  list: PropTypes.object.isRequired
}