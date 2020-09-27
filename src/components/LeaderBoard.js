import React from 'react'
import { connect } from 'react-redux'
import Statistic from './Statistic'
import '../App.css'

class LeaderBoard extends React.Component {

    render() {
        const { userId } = this.props
        return (
            <div>
                {userId.map((id) => (
                    <Statistic id={id} />
                ))}

            </div>


        )
    }
}
const mapStateToProps = ({ users }) => {
    const userId = Object.keys(users)
        .sort((a, b) => ((Object.keys(users[b].answers).length + users[b].questions.length)
            -
            (Object.keys(users[a].answers).length + users[a].questions.length)))
    return {
        userId
    }
}



export default connect(mapStateToProps)(LeaderBoard)