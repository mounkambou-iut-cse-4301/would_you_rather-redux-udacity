import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import QuestionsList from './QuestionsList';

class Dashboard extends Component {
	render() {
		const { answeredQuestionIds, unansweredQuestionIds } = this.props;

		return (
		
				<Fragment>
					<Tabs>
						<Tab eventKey="unanswered" title="Unanswered Questions">
							<QuestionsList
								idsList={unansweredQuestionIds}
								emptyListNote="All the questions have been answered. Create New one"
							/>
						</Tab>
						<Tab eventKey="answered" title="Answered Questions">
							<QuestionsList
								idsList={answeredQuestionIds}
								emptyListNote="Answer the questions"
							/>
						</Tab>
					</Tabs>
				</Fragment>
		);
	}
}

function mapStateToProps({ authedUser, questions, users }) {
	const answeredQuestionIds = Object.keys(questions)
		.filter((id) => users[authedUser].answers.hasOwnProperty(id))
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp);

	const unansweredQuestionIds = Object.keys(questions)
		.filter((id) => !users[authedUser].answers.hasOwnProperty(id))
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp);

	return {
		answeredQuestionIds,
		unansweredQuestionIds
	};
}

export default connect(mapStateToProps)(Dashboard);
