import React from 'react'
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/shared'
import { Card, Col, Row, Button, Image, Form } from 'react-bootstrap'
import authedUser from '../reducers/authedUser'
import { withRouter } from 'react-router-dom'

import PollResult from './PollResult'

class PollQuestionDetail extends React.Component {

    state = {
        optionOne: 'optionOne',
        optionTwo: 'optionTwo',
        answer: '',
        empty: 'yes'

    }
    handleOnChange = (e) => {

        this.setState({
            answer: e.target.value,
            empty: 'no'
        })
    }

    handleSubmit = (e) => {
        const { answer } = this.state
        const { dispatch, authedUser, qid } = this.props
        e.preventDefault()


        // add answer to store
        dispatch(handleSaveAnswer({ authedUser, qid, answer }))
    }

    render() {
     
        const { user, question, qid, spe_user_ids } = this.props
        console.log(spe_user_ids);

        if (spe_user_ids.includes(qid)) {
            return <PollResult id={qid} />
        }
        else {
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

                                        <Button variant="success" size="lg" block type='submit'
                                            disabled={this.state.empty === 'yes'}
                                        >
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
}
const mapStateToProps = ({ questions, authedUser, users }, props) => {
    const id = props.match.params.question_id
    const question = questions ? questions[id] : null
    const user = question ? users[authedUser] : null
    const spe_user_ids = user ? Object.keys(user.answers) : []
    return {
        question,
        user,
        qid: question ? question.id : null,
        authedUser,
        spe_user_ids

    }
}


export default withRouter(connect(mapStateToProps)(PollQuestionDetail))