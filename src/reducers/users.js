import { GET_USERS } from '../actions/users'
import { SAVE_ANSWER, ADD_QUESTION } from '../actions/shared'

export default function users(state = {}, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                ...action.users
            }
        case SAVE_ANSWER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        case ADD_QUESTION:
            const {  formattedQuestion } = action
            return {
                ...state,
                [formattedQuestion.author]: {
                    ...state[formattedQuestion.author],
                    questions: state[formattedQuestion.author].questions.concat([formattedQuestion.id])
                }
            }
        default:
            return state
    }
}