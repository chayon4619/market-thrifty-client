import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const BookingModal = ({ addedPhone, setAddedPhone }) => {
    const { user } = useContext(AuthContext);

    const { name, sellingPrice } = addedPhone;

    const handelSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const customerName = form.name.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const email = form.email.value;

        const bookingDetails = {
            phoneName: name,
            customerName,
            price,
            phone,
            email,
            address
        }
        console.log(bookingDetails)

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handelSubmit} className='grid grid-cols-1 gap-4 mt-10'>
                        <input type="number" disabled name='price' defaultValue={sellingPrice} className="input bg-gray-200  w-full " />
                        <input type="text" name="name" defaultValue={user?.displayName} disabled placeholder="Full Name" className="input input-bordered w-full " />
                        <input type="tel" name='phone' placeholder="Phone Number" className="input input-bordered w-full " />
                        <input type="text" name='address' placeholder="Meeting Address" className="input input-bordered w-full " />
                        <input type="email" name='email' defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered w-full " />
                        <input className='btn btn-dark' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;