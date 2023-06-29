import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ProductItem from '../components/ProductItem';
import ProductContext from '../context/ProductContext';

const Products = () => {
    const { products } = useContext(ProductContext);
    const { category } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        let tempProducts;
        if (category) {
            tempProducts = products.filter((product) => {
                return product.categoryId === Number(category)
            })
        } else {
            tempProducts = products;
        }
        setFilteredProducts(tempProducts);
    }, [category, products])

    return (
        <section className='col-[content] mx-auto flex flex-col justify-center md:grid md:justify-normal md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-flow-row gap-4 w-full'>
            {filteredProducts && filteredProducts.map((product) => {
                return <ProductItem key={product.id} props={product}></ProductItem>
            })}
        </section>
    )
}

export default Products