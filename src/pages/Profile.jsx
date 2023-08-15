import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const { user, dispatch } = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            let apiURL;
            if (process.env.NODE_ENV === 'development') {
                apiURL = process.env.REACT_APP_API_URI_DEV + '/orders';
            } else if (process.env.NODE_ENV === 'production') {
                apiURL = process.env.REACT_APP_API_URI_PROD + '/orders';
            }

            const response = await fetch(apiURL, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })

            const orders = await response.json();

            console.log(orders);
            setOrders(orders);
        }

        fetchOrders();
    }, [user.token])

    const logout = () => {
        dispatch({
            type: 'LOGOUT'
        })
    }

    return (
        <section className='bg-white rounded-lg p-6 my-8 col-[content]'>
            <div className='flex flex-col gap-4'>
                {orders.map(({products, createdAt}) => {
                    return <div>
                        <h2>{createdAt}</h2>
                        {products.map(({productId, amount}) => {
                            return <div>
                                {`x${amount} ${productId}`}
                            </div>
                        })}
                    </div>
                })}
            </div>

            <button onClick={logout}>
                Logout
            </button>
        </section>
    )
}

export default Profile