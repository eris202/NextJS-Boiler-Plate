

import React, { createContext, useContext, useMemo } from 'react'
import { API } from '../../agent/index';

const AuthContext = createContext("")

export function AuthProvider({ children }) {


    const authFunctions = useMemo(() => {

        // Functions here
        // All functions can be access globally

    })






    return (
        <AuthContext.Provider value={{ ...authFunctions }}>
            {children}
        </AuthContext.Provider>
    )
}



export default function useAuth() {
    const getAuthContextStore = useContext(AuthContext)
} 
