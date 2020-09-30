import { SET_AUTH_USER, SET_AUTHED_LOGOUT } from '../actions/authedUser'

export default function authedUser(state = null, action) {
    switch (action.type) {
        case SET_AUTH_USER:
            return action.id
        case SET_AUTHED_LOGOUT:
            return null
        default:
            return state
    }
}