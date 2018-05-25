import createReactClass from 'create-react-class'
import React from 'react'

const User = createReactClass({
  render() {
    return <h1>User: {this.props.params.id}</h1>
  }
})

module.exports = User
