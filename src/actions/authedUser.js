export const SET_AUTH_USER = 'SET_AUTH_USER'
export const SET_AUTHED_LOGOUT='SET_AUTHED_LOGOUT'

export function setAuthedUser(id) {
    return {
        type: SET_AUTH_USER,
        id
    }
}

export function setAuthedLogout(id) {
	return {
		type: SET_AUTHED_LOGOUT
	};
}