import React from 'react';

const PhoneCard = ({ phone, setAddedPhone }) => {
    const { buyingPrice, condition, description, img, location, name, phoneNumber, postedTime, purchaseYear, sellerName, sellingPrice } = phone;

    return (
        <div>
            <div>
                <div className="flex flex-col max-w-lg p-6 space-y-6 shadow-xl overflow-hidden rounded-lg  bg-gray-300 text-gray-900">
                    <div className="flex space-x-4">
                        <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
                        <div className="flex flex-col text-sm font-semibold space-y-1">
                            <span>{sellerName}</span>
                            <span className="text-xs text-gray-900">Posted Time: {postedTime}</span>
                        </div>
                    </div>
                    <div>
                        <img src={img} alt="" className="object-cover rounded-lg w-full mb-4 h-60 sm:h-96 bg-gray-500" />
                        <h2 className="mb-1 text-xl font-semibold">{name}</h2>
                        <p className="text-sm text-gray-900">{description}</p>
                        <div className='font-semibold grid grid-cols-2 mt-2'>
                            <p className='text-emerald-700'>Buying Price : <span className='text-red-500'>${buyingPrice}</span></p>
                            <p className='text-red-500'>Selling Price : <span className='text-emerald-700'>${sellingPrice}</span></p>
                            <p className='mt-2 text-emerald-700'>Purchase Year : <span className='text-red-500'>{purchaseYear}</span></p>
                            <p className='mt-2 text-red-500'>Condition : <span className='text-emerald-700'>{condition}</span></p>
                            <p className='mt-2 text-emerald-700'>Location : <span className='text-red-500'> {location}</span></p>
                            <p className='mt-2 text-red-500'>Mobile : <span className='text-emerald-700'> {phoneNumber}</span></p>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between">
                        <button className='btn btn-xs btn-outline text-gray-900 btn-error'>Report To admin</button>
                        <label htmlFor="booking-modal" onClick={() => setAddedPhone(phone)} className='btn btn-sm btn-outline'>Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneCard;