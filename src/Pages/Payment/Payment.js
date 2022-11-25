import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {

    const data = useLoaderData()[0]
    const { price, phoneName } = data

    return (
        <div>
            <h1 className='text-3xl'> Payment for <span className='text-4xl font-semibold text-orange-700'>{phoneName}</span></h1>
            <p className='text-lg'>Please Pay <span className=' font-semibold text-xl'>${price}</span> for buy the phone.</p>
        </div>
    );
};

export default Payment;