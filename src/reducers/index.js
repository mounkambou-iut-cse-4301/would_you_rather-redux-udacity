import users from './users'
import questions from './questions'
import setAuthUser from './authedUser'

import {combineReducers} from 'redux'

export default combineReducers({
    users,
    questions,
    setAuthUser
})

