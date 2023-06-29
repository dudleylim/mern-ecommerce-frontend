import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

const ProductItem = ({ props }) => {
    const { id, name, categoryId, price, description, imageURL } = props;
    
    return (
        <div className='max-w-xl'>
            <img src={imageURL} alt={name} className='w-full h-40 max-w-[15rem]' />
            <Link to={`/products/${categoryId}/${id}`}><h2 className='text-2xl font-semibold'>{name}</h2></Link>
            <h3 className='text-lg'>{price}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ProductItem