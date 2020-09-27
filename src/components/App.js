import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navigation from './Navigation'
import LeaderBoard from './LeaderBoard'
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
        { this.props.authedUser ? <LeaderBoard /> : null}
      </Container>
    )
  }

}

const mapStateToProps = ({ questions, authedUser }) => {

  return {
    authedUser,
    questions

  }
}

export default connect(mapStateToProps)(App)