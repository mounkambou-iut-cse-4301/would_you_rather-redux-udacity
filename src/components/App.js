import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navigation from './Navigation'
import Dashboard from './Dashboard'
import { handleInitialData } from '../actions/shared'
import { Container } from 'react-bootstrap'


class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Container>
        <Navigation /><br />
        <Dashboard />
      </Container>
    )
  }

}

export default connect()(App)