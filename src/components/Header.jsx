import React from 'react'
import Navbar from './Navbar'
import { AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Header = () => {
    const { user } = useContext(UserContext);

    return (
        <header className='flex flex-col'>
            <div className='flex flex-row py-2 px-4 items-center justify-between'>
                <AiOutlineMenu size={'2em'} className='block sm:hidden' />
                <h1 className='font-title font-bold text-2xl'>E-commerce</h1>
                {user &&
                <div className='flex flex-row gap-2.5'>
                    <AiOutlineSearch size={'2em'} />
                    <Link to='/profile'><AiOutlineUser size={'2em'} /></Link>
                    <Link to='/cart'><AiOutlineShoppingCart size={'2em'} /></Link>
                </div>
                }
            </div>
            <Navbar></Navbar>
        </header>
    )
}

export default Header