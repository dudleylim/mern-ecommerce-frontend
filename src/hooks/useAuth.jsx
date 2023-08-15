import { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/UserContext";


export const useAuth = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { dispatch } = useContext(UserContext);

    const signup = async (email, password) => {
        setError(null);
        setIsLoading(true);

        let apiURL;
        if (process.env.NODE_ENV === 'development') {
            apiURL = process.env.REACT_APP_API_URI_DEV + '/users/signup';
        } else if (process.env.NODE_ENV === 'production') {
            apiURL = process.env.REACT_APP_API_URI_PROD + '/users/signup';
        }
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const user = await response.json();

        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: 'LOGIN',
                payload: user
            });
            setIsLoading(false);
        } else {
            setError(user);
            setIsLoading(false);
        }
    }

    const login = async (email, password) => {
        setError(null);
        setIsLoading(true);

        let apiURL;
        if (process.env.NODE_ENV === 'development') {
            apiURL = process.env.REACT_APP_API_URI_DEV + '/users/login';
        } else if (process.env.NODE_ENV === 'production') {
            apiURL = process.env.REACT_APP_API_URI_PROD + '/users/login';
        }
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const user = await response.json();

        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: 'LOGIN',
                payload: user
            });
            setIsLoading(false);
        } else {
            setError(user);
            setIsLoading(false);
        }
    }

    return {
        signup,
        login,
        error,
        isLoading
    }
}