import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PhoneCard from './PhoneCard';

const CategoryPhone = () => {
    const data = useLoaderData()
    console.log(data)

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10'>
                {
                    data.map(phone => <PhoneCard
                        key={phone._id}
                        phone={phone}
                    ></PhoneCard>)
                }
            </div>
        </div>
    );
};

export default CategoryPhone;