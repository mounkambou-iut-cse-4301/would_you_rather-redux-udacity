import React from 'react'
import { connect } from 'react-redux'
import '../App.css'
import { Card, Col, Row, Badge, Image } from 'react-bootstrap'

class Statistic extends React.Component {

    render() {

        const { user } = this.props
        return (


            <Card className="margin">
                <Card.Body>
                    <Row key={user.id}>
                        <Col md={2}>
                            <Image src={user.avatarURL} width={100} roundedCircle alt="avatar" />
                        </Col>
                        <Col md={6} >
                            <Card className="text-center">
                                <Card.Header><strong>{user.name}</strong></Card.Header>
                                <Card.Body>
                                    <p>Answered questions <strong>{Object.keys(user.answers).length}</strong> </p>
                                    <p>Created questions <strong>{user.questions.length}</strong></p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} >
                            <Card className="text-center">
                                <Card.Header>Score</Card.Header>
                                <Card.Body>
                                    <Badge variant="info">{Object.keys(user.answers).length + user.questions.length}</Badge>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>



        )
    }
}
const mapStateToProps = ({ users }, { id }) => {
    const user = users[id]
    return {
        user
    }
}



export default connect(mapStateToProps)(Statistic)