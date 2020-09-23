import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Avatar from './Avatar';

class Statistics extends Component {
	render() {
		const { user } = this.props;
		const { name, avatarURL, answers, questions } = user;

		return (
			<Row className="justify-content-center">
				<Col xs={12} md={6}>
					<Card bg="light" className="m-3">
						<Card.Header>
							<Avatar avatarURL={avatarURL} className="mr-2" />
							<span><b>{name}</b></span>
						</Card.Header>
						<Card.Body className="d-flex justify-content-center">
							<Card.Text>
								<b>Answered Questions: {Object.keys(answers).length}</b>
								<br />
								<b>Created Questions: {questions.length}</b>
							</Card.Text>
						</Card.Body>
						
						<Card.Footer className="d-flex justify-content-center">
						<h2><span
							className='badge badge-info'>	Score: {Object.keys(answers).length + questions.length}</span>
						</h2>
						
						</Card.Footer>
					</Card>
				</Col>
			</Row>
		);
	}
}

function mapStateToProps({ users }, { id }) {
	return {
		user: users[id]
	};
}

export default connect(mapStateToProps)(Statistics);
