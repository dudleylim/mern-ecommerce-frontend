import React from 'react'

const Button = ({ clickFunc, children }) => {
    
    return (
        <button onClick={clickFunc} className='p-3 rounded-[16em] border border-green-300 hover:bg-green-300 active:bg-green-400'>
            {children}
        </button>
    )
}

export default Button