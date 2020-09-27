import React from 'react'
import { connect } from 'react-redux'

import { Card, Col, Row, Button, Image } from 'react-bootstrap'

class PollQuestion extends React.Component {

    render() {
        const { question, user } = this.props
        return (
            <Card  >
                <Card.Header>{user.name} ask:</Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={6} >
                            <Image src={user.avatarURL} width={100} roundedCircle alt="{user.avatarURL}" />
                        </Col>
                        <Col md={6} >
                            <h4>Would you rather</h4>
                            <p>{question ? question.optionOne.text : null}</p>
                            <p>{question ? question.optionTwo.text : null}</p>
                            <Button>View Poll</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>


        )
    }
}

const mapStateToProps = ({ users, questions, authedUser }, { id }) => {
    const question = questions ? questions[id] : null
    const user = question ? users[question.author] : {}
    return {
        question,
        user
    }
}

export default connect(mapStateToProps)(PollQuestion)