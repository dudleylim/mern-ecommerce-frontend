import React from "react"
import { useEffect } from "react";
import { useReducer } from "react";

const UserContext = React.createContext();
export default UserContext;

const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                user: action.payload
            }

        case 'LOGOUT':
            localStorage.removeItem('user');
            return {
                user: null
            }

        default:
            return state;
    }
}

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, {
        user: null
    })

    // check if user exists in local storage already
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (user) {
            dispatch({
                type: 'LOGIN',
                payload: user
            })
        }
    }, [dispatch])

    const contextData = {
        ...state,
        dispatch
    };

    return <UserContext.Provider value={contextData}>
        {children}
    </UserContext.Provider>
}