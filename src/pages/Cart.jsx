import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import Button from '../components/Button';
import CartContext from '../context/CartContext';
import UserContext from '../context/UserContext';

const Cart = () => {
    const { state, dispatch } = useContext(CartContext);
    const { user } = useContext(UserContext);

    // useEffect(() => {
    //     console.log(state);
    // }, [state])

    const removeProduct = (id) => {
        dispatch({
            type: 'REMOVE_CART',
            payload: id
        })
    }

    const checkout = async () => {
        let products = [];

        for (let { _id, amount } of state) {
            products.push({
                productId: _id,
                amount
            })
        }
        
        // fetch logic
        let apiURL;
        if (process.env.NODE_ENV === 'development') {
            apiURL = process.env.REACT_APP_API_URI_DEV + '/orders';
        } else if (process.env.NODE_ENV === 'production') {
            apiURL = process.env.REACT_APP_API_URI_PROD + '/orders';
        }

        // console.log(products);
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify({
                products: products
            })
        });
        const orders = await response.json();

        if (response.ok) {
            dispatch({
                type: 'CLEAR_CART'
            })
        }
    }

    return (
        <section className='bg-white rounded-lg p-6 my-8 col-[content]'>
            {(!state || state.length === 0) && 
                <h1 className='font-bold text-2xl'>No items</h1>
            }
            {(state && state.length !== 0) && 
            <ul className='flex flex-col gap-6'>
                {state.map((product) => {
                    return <li key={product._id} className='flex flex-row gap-3'>
                        <div className='basis-[10em] h-[10em]'>
                            <img src={product.imageURL} alt={product.name} className='h-full w-full' />
                        </div>
                        <div className='basis-3/5'>
                            <h3 className='text-3xl font-bold'>{product.amount}x {product.name}</h3>
                        </div>
                        <div className='basis-1/5 text-right'>
                            <p className='pr-3'>{product.price * product.amount}</p>
                            <Button clickFunc={()=>{removeProduct(product._id)}}>Cancel</Button>
                        </div>
                    </li>
                })}
                <Button clickFunc={checkout}>Checkout</Button>
            </ul>
            }
        </section>
    )
}

export default Cart