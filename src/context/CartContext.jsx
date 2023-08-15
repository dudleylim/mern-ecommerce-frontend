import React from "react"
import { useReducer } from "react";

const CartContext = React.createContext();
export default CartContext;

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CART':
            return [action.payload, ...state];
    
        case 'REMOVE_CART':
            const temp = state.filter((product) => product._id !== action.payload)
            return temp;

        case 'CLEAR_CART': {
            return [];
        }

        default:
            return state;
    }
}

export const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, [])


    const contextData = {
        state,
        dispatch
    };

    return <CartContext.Provider value={contextData}>
        {children}
    </CartContext.Provider>
}