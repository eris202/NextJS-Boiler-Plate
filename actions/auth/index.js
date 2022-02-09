import { SET_USER, UPDATE_USER } from "../../state/reducer";



export const setUser = (payload) => {
    return ({
        type: SET_USER,
        payload
    })
}

export const updateUser = (user) => {
    return ({
        type: UPDATE_USER,
        payload
    })
}
export const logout = (user) => {
    return ({
        type: UPDATE_USER,
    })
}