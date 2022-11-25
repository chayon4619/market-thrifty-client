import React from 'react';
import toast from 'react-hot-toast';
import VerifyIcon from '../Shared/VerifyIcon';

const PhoneCard = ({ phone, setAddedPhone }) => {
    const { buyingPrice, condition, description, img, location, name, phoneNumber, postedTime, purchaseYear, sellerName, sellingPrice, role, _id } = phone;

    const handelReport = id => {
        fetch(`http://localhost:5000/report/${id}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem("marketThrifty-token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.error('Reported');
                }
            })
    }

    return (
        <div>
            <div>
                <div className="flex flex-col max-w-lg p-6 space-y-6 shadow-xl overflow-hidden rounded-lg  bg-gray-300 text-gray-900">
                    <div className="flex space-x-4">
                        <div className="flex flex-col text-sm font-semibold space-y-1">
                            <div className='flex'>
                                <span className='mr-2'>{sellerName}</span>
                                <span> {role === "verified" && <VerifyIcon></VerifyIcon>}</span>
                            </div>
                            <span className="text-xs text-gray-900">Posted On: {postedTime}</span>
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
                        <button
                            onClick={() => handelReport(_id)}
                            className='btn btn-xs btn-outline text-gray-900 btn-error'>Report To admin</button>
                        <label htmlFor="booking-modal" onClick={() => setAddedPhone(phone)} className='btn btn-sm btn-outline'>Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneCard;