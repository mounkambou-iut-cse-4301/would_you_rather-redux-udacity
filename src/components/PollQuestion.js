import React from 'react'
import { connect } from 'react-redux'
import '../App.css'
import { Card, Col, Row, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class PollQuestion extends React.Component {
    render() {
        const { question, user, id } = this.props
        const question_id = id
        return (

            <Card  className="margin_top">
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
                            <Link to={`/questions/${question_id}`}><Button>View Poll</Button></Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = ({ users, questions }, { id }) => {
    const question = questions ? questions[id] : null
    const user = question ? users[question.author] : {}

    return {
        question,
        user,
        id
    }
}

export default connect(mapStateToProps)(PollQuestion)