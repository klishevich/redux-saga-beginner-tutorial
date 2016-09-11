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
          <span><b>House:</b></span>
          <span>{list.house}</span>
        </div>
      </div>
    )
  }
}

List.propTypes = {
  list: PropTypes.object.isRequired
}