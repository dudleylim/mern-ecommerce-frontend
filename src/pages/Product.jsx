import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import ProductContext from '../context/ProductContext';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Product = () => {
    const { product } = useParams();
    const [currentProduct, setCurrentProduct] = useState(null);
    const { products } = useContext(ProductContext);
    const [cartAmount, setCartAmount] = useState(0);

    useEffect(() => {
        setCurrentProduct(products.find(prod => prod.id === Number(product)))
    }, [product, products])

    const addCart = () => {
        console.log('cart')
    }

    const addWishlist = () => {
        console.log('wishlist')
    }

    return (
        <section className='col-[content] flex flex-col align-middle gap-8 lg:flex-row'>
        {currentProduct && 
            <>
                <div className='lg:h-1/2 max-h-[50vh] basis-1/2'>
                    <img src={currentProduct.imageURL} alt={currentProduct.name} className='mx-auto basis-1/2 lg:m-0 w-full h-full' />
                </div>

                <div className='basis-1/2 flex flex-col gap-4'>
                    <h1 className='font-title font-bold text-3xl'>{currentProduct.name}</h1>
                    <h3 className='font-bold text-xl'>{currentProduct.price}</h3>
                    <p>{currentProduct.description}</p>
                    <div className='flex flex-row align-middle w-1/2'>
                        <button  className='p-3 border border-red-600 border-r-0' onClick={() => {cartAmount > 0 && setCartAmount(cartAmount - 1)}}><AiOutlineMinus /></button>
                        <input className='grow text-center bg-white'  type="text" disabled={true} value={cartAmount} />
                        <button className='p-3 border border-green-600 border-l-0'  onClick={() => {setCartAmount(cartAmount + 1)}}><AiOutlinePlus /></button>
                    </div>
                    <div className='flex flex-row gap-4 align-middle'>
                        <Button clickFunc={addCart}>Add to Cart</Button>
                        <Button clickFunc={addWishlist}>Wishlist</Button>
                    </div>
                </div>
            </>
        }
        </section>
    )
}

export default Product