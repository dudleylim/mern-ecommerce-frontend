import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

const ProductItem = ({ props }) => {
    const { _id, name, categoryId, price, description, imageURL } = props;
    
    return (
        <div>
        <div className='max-w-xl flex flex-col justify-between'>
            <img src={imageURL} alt={name} className='w-full h-40' />
            <Link to={`/products/${categoryId}/${_id}`}><h2 className='text-2xl font-semibold'>{name}</h2></Link>
            <h3 className='text-lg'>{price}</h3>
        </div>
        </div>
    )
}

export default ProductItem