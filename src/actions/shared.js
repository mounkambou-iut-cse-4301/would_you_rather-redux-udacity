import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { getUsers } from './users'
import { getQuestions } from './questions'
// import { setAuthedUser } from './authedUser'


export const SAVE_ANSWER = 'SAVE_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

// const id = 'tylermcginnis'
export function handleInitialData() {

    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                // dispatch(setAuthedUser(id))
                dispatch(getUsers(users))
                dispatch(getQuestions(questions))
                dispatch(hideLoading())
            })
    }
}

export function saveAnswer({ authedUser, qid, answer }) {
    return {
        type: SAVE_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function handleSaveAnswer(info) {
    return (dispatch => {
        return saveQuestionAnswer(info)
            .then(() => {
                dispatch(saveAnswer(info))
            })
    })
}



export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}


export function handleSaveQuestion(question) {
    return (dispatch) => {
        return saveQuestion(question)
            .then((question) => {
                dispatch(addQuestion(question))
            })
    }
}