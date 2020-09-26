import React from 'react'
import { connect } from 'react-redux'
import { Card, Col, Row, Button, Image } from 'react-bootstrap'
import PollQuestion from './PollQuestion'

class Dashboard extends React.Component {
    render() {
        return (

            <Card>
                <Card.Header>
                    <Row>
                        <Col xs={6}>
                            <Button>Unanswer</Button>
                        </Col>
                        <Col xs={6}>
                            <Button>Answer</Button>
                        </Col>

                    </Row>
                   
                </Card.Header>
                <Card.Body>
                    {this.props.qids.map((id) => (
                        <div key={id}>
                            <PollQuestion id={id} />
                        </div>
                    ))}


                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = ({ questions, authedUser }) => {
    const qids = Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp)

    return {
        qids,
    

    }
}

export default connect(mapStateToProps)(Dashboard)