import createReactClass from 'create-react-class'
import React from 'react'
import auth from '../utils/auth'

const Logout = createReactClass({
  componentDidMount() {
    auth.logout()
  },

  render() {
    return <p>You are now logged out</p>
  }
})

module.exports = Logout
