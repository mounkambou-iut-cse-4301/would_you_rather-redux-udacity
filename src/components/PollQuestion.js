import React from 'react'
import { connect } from 'react-redux'
import { Card, Col, Row, Button, Image } from 'react-bootstrap'

class PollQuestion extends React.Component {

    render() {
        const { question, user } = this.props
        return (
            <Card >
                <Card.Header>{user.name} ask:</Card.Header>
                <Card.Body>
                    <Row >
                        <Col xs={6} md={4}>
                            <Image src={user.avatarURL} width={100} roundedCircle alt="tylermcginnis" />
                        </Col>
                        <Col xs={6} md={4}>
                            <h4>Would you rather</h4>
                            <p>{question.optionOne.text}</p>
                            <p>{question.optionTwo.text}</p>
                            <Button>View Poll</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>


        )
    }
}

const mapStateToProps = ({ users, questions, authedUser }, { id }) => {
    const question = questions[id]
    const user = users[question.author]
    return {
        question,
        user
    }
}

export default connect(mapStateToProps)(PollQuestion)