import React from 'react'
import { connect } from 'react-redux'
import '../App.css'
import { Card, Col, Row, Image, Alert, ProgressBar, Badge } from 'react-bootstrap'

class PollResult extends React.Component {

    render() {
        const { authedUser, question, user } = this.props
        return (

            <Card className="magin">
                <Card.Header>{user ? user.name : null} ask :</Card.Header>
                <Card.Body>
                    <Row >
                        <Col md={4}>
                            <Image src={user ? user.avatarURL : null} width={100} roundedCircle alt="avatar" />
                        </Col>
                        <Col md={8} >
                            <h4><b>Results</b></h4>
                            <Row >

                                <Col md={10} >
                                    <Alert variant="info">
                                        <p>Would you rather be </p>
                                        <p >{question ? question.optionOne.text : null}</p>
                                        <ProgressBar animated now={45} />
                                        <p>{question ? question.optionOne.votes.length : null}
                                            <span> out of </span>
                                            {question ? (question.optionOne.votes.length) + (question.optionTwo.votes.length) : null}
                                        </p>

                                    </Alert>
                                </Col>
                                <Col md={2} >
                                    {question ?
                                        question.optionOne.votes.includes(authedUser) ?
                                            (<Badge pill variant="success">
                                                Your choice
                                            </Badge>)
                                            : null
                                        : null}

                                </Col>
                            </Row>

                            <Row >

                                <Col md={10} >
                                    <Alert variant="dark">
                                        <p >{question ? question.optionTwo.text : null}</p>
                                        <ProgressBar animated now={45} />
                                        <p>{question ? question.optionTwo.votes.length : null}
                                            <span> out of </span>
                                            {question ? (question.optionOne.votes.length) + (question.optionTwo.votes.length) : null}
                                        </p>

                                    </Alert>
                                </Col>
                                <Col md={2} >
                                    {question ?
                                        question.optionTwo.votes.includes(authedUser) ?
                                            (<Badge pill variant="success">
                                                Your choice
                                            </Badge>)
                                            : null
                                        : null}

                                </Col>
                            </Row>
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
        authedUser

    }
}


export default connect(mapStateToProps)(PollResult)