import React from 'react'
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth';

const UserForm = ({ formType }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, signup, error } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formType === 'login') {
            login(email, password);
        } else if (formType === 'signup') {
            signup(email, password);
        }
    }

    return (
        <section className='col-[content] my-8'>
            <form onSubmit={handleSubmit} className='flex flex-col align-middle bg-slate-200 p-10 border rounded-lg gap-8'>
                {error &&
                    <div className='border border-red-600 rounded-lg p-4'>
                        {error}
                    </div>
                }

                <div className='flex flex-col'>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}} className='p-1 rounded-md' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}} className='p-1 rounded-md' />
                </div>

                <button type="submit" className='p-3 rounded-[16em] border border-green-600 hover:bg-slate-100'>Submit</button>
            </form>
        </section>
    )
}

export default UserForm