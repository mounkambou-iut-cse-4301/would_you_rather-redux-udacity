import React from 'react'
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/shared'
import { Card, Col, Row, Button, Image, Form } from 'react-bootstrap'
import authedUser from '../reducers/authedUser'

class PollQuestionDetail extends React.Component {

    state = {
        optionOne: 'optionOne',
        optionTwo: 'optionTwo',
        answer: '',
        errorMessage: ''

    }
    handleOnChange = (e) => {

        this.setState({
            answer: e.target.value
        })
    }

    handleSubmit = (e) => {
        const { answer } = this.state
        const { dispatch, authedUser, qid } = this.props
        e.preventDefault()

        if (answer !== '') {
            //todo: add options to store
            dispatch(handleSaveAnswer({ authedUser, qid, answer }))


        } else {
            this.setState({ errorMessage: 'You have to make any choice' })
        }

    }
    render() {
        const { user, question } = this.props
        return (

            <Card className="margin">
                <Card.Header>{user ? user.name : null} ask:</Card.Header>
                <Card.Body>
                    <Row >
                        <Col md={4}>
                            <Image src={user ? user.avatarURL : null} width={100} roundedCircle alt="avatar" />
                        </Col>
                        <Col md={8}>
                            <h4>Would you rather..</h4>
                            <Form onSubmit={this.handleSubmit}>
                                <fieldset>
                                    {this.state.errorMessage ? (
                                        <p className="text-danger">{this.state.errorMessage}</p>
                                    ) : null}
                                    <Form.Group as={Row}>
                                        <Col md={12}>
                                            <Form.Check
                                                type="radio"
                                                label={user ? question.optionOne.text : null}
                                                name="votedOption"
                                                id="optionOne"
                                                value={this.state.optionOne}
                                                onChange={this.handleOnChange}
                                            />
                                            <Form.Check
                                                type="radio"
                                                label={user ? question.optionTwo.text : null}
                                                name="votedOption"
                                                id="optionTwo"
                                                value={this.state.optionTwo}
                                                onChange={this.handleOnChange}
                                            />
                                        </Col>
                                    </Form.Group>
                                </fieldset>

                                <Form.Group as={Row}>

                                    <Button variant="success" size="lg" block type='submit'>
                                        Submit
                                        </Button>

                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

        )
    }
}
const mapStateToProps = ({ questions, authedUser, users }) => {
    const question = questions ? questions['6ni6ok3ym7mf1p33lnez'] : null
    const user = question ? users[question.author] : null
    return {
        question,
        user,
        qid: question ? question.id : null,
        authedUser

    }
}


export default connect(mapStateToProps)(PollQuestionDetail)