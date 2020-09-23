import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { handleAddQuestion } from '../actions/questions';

class CreateQuestion extends Component {
	state = {
		optionOne: '',
		optionTwo: '',
		toDashboard: false
	};

	handleInputChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = (e) => {
		const { optionOne, optionTwo } = this.state;
		const { dispatch } = this.props;

		e.preventDefault();

		this.setState(
			{
				optionOne: '',
				optionTwo: '',
				toDashboard: true
			},
			() => dispatch(handleAddQuestion(optionOne, optionTwo))
		);
	};

	render() {
		const { optionOne, optionTwo, toDashboard } = this.state;

		if (toDashboard === true) return <Redirect to="/" />;

		return (
			<Fragment>

				<Row className="justify-content-center">
					<Col xs={12} md={6}>
						<Card bg="light" className="text-center m-3 ">
							<Card.Header>
								<h2 className="text-center my-3">
									<b>Create New Question</b>
								</h2>
							</Card.Header>
							<Card.Body>
								<p>Comple the question:</p>
								<h6><b>Would you rather...</b></h6>
								<Form onSubmit={this.handleSubmit}>
									<Form.Group controlId="optionOne">
										<Form.Control
											type="text"
											name="optionOne"
											placeholder="Enter Option One Text Here"
											value={optionOne}
											onChange={this.handleInputChange}
										/>
									</Form.Group>
									<h4 >
										<b>OR</b>
									</h4>
									<Form.Group controlId="optionTwo">
										<Form.Control
											type="text"
											name="optionTwo"
											value={optionTwo}
											placeholder="Enter Option Two Text Here"
											onChange={this.handleInputChange}
										/>
									</Form.Group>
									<Button
										type="submit"
										variant="outline-dark"
										disabled={optionOne === '' || optionTwo === ''}
									>
										Submit
									</Button>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Fragment>
		);
	}
}

export default connect()(CreateQuestion);
