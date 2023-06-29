import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Products from '../pages/Products'

const Main = () => {
    return (
        <main className='flex-grow flex flex-col px-4 sm:grid sm:grid-cols-main sm:px-0 pt-8 bg-slate-400 w-full'>
            <Routes>
                <Route path='/' element={<Home />} exact></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/products/' element={<Products />}></Route>
                <Route path='/products/:category' element={<Products />}></Route>
                <Route path='/products/:category/:product' element={<Product />}></Route>
            </Routes>
        </main>
    )
}

export default Main