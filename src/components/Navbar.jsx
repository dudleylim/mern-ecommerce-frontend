import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Navbar = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const { user } = useContext(UserContext);

    useEffect(() => {
        const fetchCategories = async () => {
            setIsLoading(true);
            let response;
            try {
                if (process.env.NODE_ENV === 'development') {
                    response = await fetch(process.env.REACT_APP_API_URI_DEV + '/categories');
                } else if (process.env.NODE_ENV === 'production') {
                    response = await fetch(process.env.REACT_APP_API_URI_PROD + '/categories');
                }
            } catch (error) {
                setError(error);
                console.log(error);
                return
            }

            const data = await response.json();
            
            if (!response.ok) {
                setError(data);
            }
            if (response.ok) {
                setCategories(data);
                setIsLoading(false);
            }
        }

        fetchCategories();
    }, [])


    return (
        <nav className='sm:flex flex-row justify-center hidden '>
            {
                isLoading ?
                <>
                    <div className='grow text-center'>Loading...</div>
                </> :
                <>
                    {
                        user &&
                        <>
                            <Link to='/' className='grow text-center hover:bg-slate-100 transition-colors'>Home</Link>
                            {categories.map((category) => {
                                return <Link to={`/products/${category._id}`} key={category._id} className='grow text-center hover:bg-slate-100 transition-colors'>{category.name}</Link>
                            })}
                            <Link to='/about' className='grow text-center hover:bg-slate-100 transition-colors'>About Us</Link>
                            <Link to='/contact' className='grow text-center hover:bg-slate-100 transition-colors'>Contact</Link>
                        </>
                    }
                    {
                        !user &&
                        <>
                            <Link to='/login' className='grow text-center hover:bg-slate-100 transition-colors'>Login</Link>
                            <Link to='/signup' className='grow text-center hover:bg-slate-100 transition-colors'>Signup</Link>
                        </>
                    }
                </>
            }
        </nav>
    )
}

export default Navbar