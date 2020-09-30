import { GET_QUESTIONS } from '../actions/questions'
import { SAVE_ANSWER, ADD_QUESTION } from '../actions/shared'

export default function questions(state = {}, action) {
    switch (action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_ANSWER:
            const { authedUser, qid, answer } = action
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: [...state[qid][answer].votes, authedUser]
                    }
                }
            }
        case ADD_QUESTION:
            const { question } = action
            return {
                ...state,
                [question.id]: question
            }
        default:
            return state
    }
}


