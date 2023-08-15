import React from 'react'
import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className='text-white bg-black p-8 flex flex-col sm:flex-row justify-between px-16'>
            <p className='flex-1'>Dudley Adrian Lim, 2023</p>
            <div className='flex-1 flex flex-row justify-end gap-8'>
                <AiFillGithub size={25}/>
                <AiOutlineLinkedin size={25}/>
            </div>
        </footer>
    )
}

export default Footer