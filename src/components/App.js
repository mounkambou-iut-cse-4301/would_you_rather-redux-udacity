import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import Navigation from './Navigation'
import Dashboard from './Dashboard'
import PollQuestionDetail from './PollQuestionDetail'
import Login from './Login'
import WrongPath from './WrongPath'
import { handleInitialData } from '../actions/shared'
import { Container } from 'react-bootstrap'

import { LoadingBar } from 'react-redux-loading'




class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar /><br />
          <Container>
            {this.props.authedUser ?
              <div>
                <Navigation /><br />
                <Switch>
                  <Route path='/' exact component={Dashboard} />
                  <Route path="/questions/:question_id" component={PollQuestionDetail} />
                  <Route path="/new_question" component={NewQuestion} />
                  <Route path="/leaderboard" component={LeaderBoard} />
                  <Route component={WrongPath} />
                </Switch>
              </div>
              : <Login />}
          </Container>

        </Fragment>

      </Router>
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