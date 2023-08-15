import React from 'react'
import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import UserContext from '../context/UserContext'
import About from '../pages/About'
import Cart from '../pages/Cart'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Product from '../pages/Product'
import Products from '../pages/Products'
import Profile from '../pages/Profile'
import Signup from '../pages/Signup'

const Main = () => {
    const { user } = useContext(UserContext);

    return (
        <main className='flex-grow flex flex-col px-0 sm:grid sm:grid-cols-main w-full'>
            <Routes>
                <Route path='/' element={user ? <Home /> : <Navigate to='/login' />} exact></Route>
                <Route path='/about' element={user ? <About /> : <Navigate to='/login' />}></Route>
                <Route path='/contact' element={user ? <Contact /> : <Navigate to='/login' />}></Route>
                <Route path='/products/' element={user ? <Products /> : <Navigate to='/login' />}></Route>
                <Route path='/products/:category' element={user ? <Products /> : <Navigate to='/login' />}></Route>
                <Route path='/products/:category/:product' element={user ? <Product /> : <Navigate to='/login' />}></Route>
                <Route path='/cart' element={user ? <Cart /> : <Navigate to='/login' />}></Route>
                <Route path='/profile' element={user ? <Profile /> : <Navigate to='/login' />} exact></Route>
                
                <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />}></Route>
                <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/' />}></Route>
            </Routes>
        </main>
    )
}

export default Main