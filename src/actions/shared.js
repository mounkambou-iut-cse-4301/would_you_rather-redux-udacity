import { getInitialData } from '../utils/api'
import { getUsers } from './users'
import { getQuestions } from './questions'
import { setAuthedUser } from './authedUser'

const id = 'tylermcginnis'
export function handleInitialData() {

    return (dispatch) => {
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(getUsers(users))
                dispatch(getQuestions(questions))
                dispatch(setAuthedUser(id))
            })
    }
}