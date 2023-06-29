import React from "react";
import { useEffect } from "react";
import { useState } from "react";


const ProductContext = React.createContext();
export default ProductContext;

export const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let response;
                if (process.env.NODE_ENV === 'development') {
                    response = await fetch(process.env.REACT_APP_API_URI_DEV + '/products');
                } else if (process.env.NODE_ENV === 'production') {
                    response = await fetch(process.env.REACT_APP_API_URI_PROD + '/products');
                }

                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchProducts();
    }, [])

    const contextData = {
        products
    }

    return <ProductContext.Provider value={contextData}>
        { children }
    </ProductContext.Provider>
}