import users from './users'
import questions from './questions'
import authedUser from './authedUser'
import { loadingBarReducer } from 'react-redux-loading'

import { combineReducers } from 'redux'

export default combineReducers({
    users,
    questions,
    authedUser,
    loadingBar: loadingBarReducer
})

