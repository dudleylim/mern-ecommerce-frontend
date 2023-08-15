import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const Home = () => {
    return (
        <>
            <section className='col-span-full bg-home-banner bg-cover bg-no-repeat min-h-screen bg-fixed'>
                <div className='h-full flex flex-col justify-center pl-8 gap-16'>
                    <h1 className='font-title font-light text-6xl text-white'>DAL'S Shopping Site</h1>
                    <div>
                        <Link to={'/products'} className='bg-green-300 rounded-xl text-xl text-black p-4'>You should shop yourself, NOW</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home