import React from 'react'
import { connect } from 'react-redux'
import '../App.css'
import { Card, Col, Row, Image, Alert, ProgressBar, Badge } from 'react-bootstrap'

class PollResult extends React.Component {

    render() {
        const { authedUser, question, user, fisrtOption, secondOption } = this.props
        const option1 = fisrtOption;
        const option2 = secondOption;
        const progressInstanceFisrtOption = <ProgressBar animated now={option1} label={`${option1}%`} />
        const progressInstanceSecondOption = <ProgressBar animated now={option2} label={`${option2}%`} />

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
                                        {progressInstanceFisrtOption}
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
                                        {progressInstanceSecondOption}
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
const mapStateToProps = ({ questions, authedUser, users }, { id }) => {
    const question = questions ? questions[id] : null
    const user = question ? users[question.author] : null 
    let fisrtOption = (((question.optionOne.votes.length) / ((question.optionOne.votes.length) + (question.optionTwo.votes.length))) * 100)
    fisrtOption=Number.parseFloat(fisrtOption).toPrecision(3)
    let secondOption = (((question.optionTwo.votes.length) / ((question.optionOne.votes.length) + (question.optionTwo.votes.length))) * 100)
    secondOption=Number.parseFloat(secondOption).toPrecision(3)
    return {
        question,
        user,
        authedUser,
        fisrtOption,
        secondOption

    }
}


export default connect(mapStateToProps)(PollResult)