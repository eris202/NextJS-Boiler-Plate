import React, { useReducer } from "react";
import { AuthProvider } from "../Context/auth";
import authReducers from "../reducers/auth";
import { authReducerInitialData } from "../state/reducer";



export default function Store() {
    const [auth, authDispatch] = useReducer(authReducers, authReducerInitialData)

    return (
        <AuthProvider auth={auth} authDispatch={authDispatch}>

        </AuthProvider>
    )
}