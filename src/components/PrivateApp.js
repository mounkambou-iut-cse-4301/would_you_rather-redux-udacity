import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navigation from './Navigation';
import Dashboard from './Dashboard';
import CreateQuestion from './CreateQuestion';
import QuestionPage from './QuestionPage';
import LeaderBoard from './LeaderBoard';
import PageNotFound from './PageNotFound';

class PrivateApp extends Component {
	render() {
		return (
			<Router>
				<Container>
					<Navigation />
					<main>
						<Switch>
							<Route path="/" exact component={Dashboard} />
							<Route path="/questions/:id" component={QuestionPage} />
							<Route path="/add" component={CreateQuestion} />
							<Route path="/leaderboard" component={LeaderBoard} />
							<Route component={PageNotFound} />
						</Switch>
					</main>
				</Container>
			</Router>
		);
	}
}

export default PrivateApp;
