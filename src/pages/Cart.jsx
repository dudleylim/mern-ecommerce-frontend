import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import Button from '../components/Button';
import CartContext from '../context/CartContext'

const Cart = () => {
    const { state, dispatch } = useContext(CartContext);

    useEffect(() => {
        console.log(state);
    }, [state])

    const removeProduct = (id) => {
        dispatch({
            type: 'REMOVE_CART',
            payload: id
        })
    }

    const checkout = () => {
        console.log('checkout');
    }

    return (
        <section className='bg-white rounded-lg p-6 col-[content]'>
            {(!state || state.length === 0) && 
                <h1 className='font-bold text-2xl'>No items</h1>
            }
            {(state && state.length !== 0) && 
            <ul className='flex flex-col gap-6'>
                {state.map((product) => {
                    return <li key={product.id} className='flex flex-row gap-3'>
                        <div className='basis-[10em] h-[10em]'>
                            <img src={product.imageURL} alt={product.name} className='h-full w-full' />
                        </div>
                        <div className='basis-3/5'>
                            <h3 className='text-3xl font-bold'>{product.amount}x {product.name}</h3>
                        </div>
                        <div className='basis-1/5 text-center'>
                            <p>{product.price * product.amount}</p>
                            <Button clickFunc={()=>{removeProduct(product.id)}}>Cancel</Button>
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