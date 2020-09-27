import React from 'react'
import '../App.css'
import { connect } from 'react-redux'
import { NavLink } from "react-router-dom";
import { Card, Col, Row, Button, Image, Tabs, Tab } from 'react-bootstrap'
import PollQuestion from './PollQuestion'

class Dashboard extends React.Component {
    render() {
        const { an_q } = this.props
        return (

            <Card className="margin">

                <Tabs defaultActiveKey="unanswer" transition={false} id="noanim-tab-example">
                    <Tab eventKey="unanswer" title="Unanswer">
                        {this.props.qids.map((id) => {
                            if (!(an_q.includes(id))) {
                                return (
                                    <div key={id}>
                                        <PollQuestion id={id} />
                                    </div>
                                )
                            }
                        })
                        }

                    </Tab>
                    <Tab eventKey="answer" title="Answer">
                        {this.props.an_q.map((id) => (
                            <div key={id}>
                                <PollQuestion id={id} />
                            </div>
                        ))}

                    </Tab>

                </Tabs>
            </Card>
        )
    }
}

const mapStateToProps = ({ questions, users, authedUser }) => {
    const qids = Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    const user = authedUser ? users[authedUser] : null
    const answerqt = user ? user.answers : null
    const an_q = answerqt ? Object.keys(answerqt) : []


    return {
        authedUser,
        qids,
        an_q,

    }
}

export default connect(mapStateToProps)(Dashboard)