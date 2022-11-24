import React, { useEffect, useState } from 'react';
import PhoneCard from './PhoneCard';

const CategoryPhone = () => {

    const [phoneData, setPhoneData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/allphones`)
            .then(res => res.json())
            .then(data => {
                setPhoneData(data)
            })
    }, [])

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10'>
                {
                    phoneData.map(phone => <PhoneCard
                        key={phone._id}
                        phone={phone}
                    ></PhoneCard>)
                }
            </div>
        </div>
    );
};

export default CategoryPhone;