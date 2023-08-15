import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import ProductContext from '../context/ProductContext';
import CartContext from '../context/CartContext'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Product = () => {
    const { product } = useParams(); // productId of product in url
    const { products } = useContext(ProductContext);
    const { dispatch } = useContext(CartContext);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [cartAmount, setCartAmount] = useState(1);
    const [alert, setAlert] = useState(null);

    useEffect(() => {
        setCurrentProduct(products.find(prod => prod._id === product))
    }, [product, products])

    const addCart = () => {
        const order = {
            ...currentProduct,
            amount: cartAmount
        }

        dispatch({
            type: 'ADD_CART',
            payload: order
        })

        setCartAmount(1);
        setAlert('Item added');
    }

    useEffect(() => {
        if (alert) {
            const timeout = setTimeout(() => {
                setAlert(null);
            }, 5000)

            return () => {
                clearTimeout(timeout);
            }
        }
    }, [alert])

    // const addWishlist = () => {
    //     console.log('wishlist')
    // }

    return (
        <section className='col-[content] flex flex-col align-middle my-8 gap-8 lg:flex-row mb-8'>
        {currentProduct && 
            <>
                <div className='lg:h-full max-h-[60vh] basis-1/2'>
                    <img src={currentProduct.imageURL} alt={currentProduct.name} className='mx-auto basis-1/2 lg:m-0 w-full h-full lg:h-full' />
                </div>

                <div className='basis-1/2 flex flex-col gap-4'>
                    <h1 className='font-title font-bold text-3xl'>{currentProduct.name}</h1>
                    <h3 className='font-bold text-xl'>{currentProduct.price}</h3>
                    <p>{currentProduct.description}</p>
                    <div className='flex flex-row align-middle w-1/2'>
                        <button  className='p-3 border border-red-600' onClick={() => {cartAmount > 1 && setCartAmount(cartAmount - 1)}}><AiOutlineMinus /></button>
                        <input className='grow text-center bg-slate-100'  type="text" disabled={true} value={cartAmount} />
                        <button className='p-3 border border-green-600'  onClick={() => {setCartAmount(cartAmount + 1)}}><AiOutlinePlus /></button>
                    </div>
                    <div className='flex flex-row gap-4 align-middle'>
                        <Button clickFunc={addCart}>Add to Cart</Button>
                        {/* <Button clickFunc={addWishlist}>Wishlist</Button> */}
                    </div>
                    {alert && 
                    <div>
                        {alert}
                    </div>
                    }
                </div>
                
                
            </>
        }
        </section>
    )
}

export default Product