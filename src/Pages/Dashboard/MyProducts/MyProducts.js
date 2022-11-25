import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {

    const { user } = useContext(AuthContext);
    const [sellerProduct, setSellerProduct] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/seller-product?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setSellerProduct(data)
            })

    }, [user?.email])

    return (
        <div>
            <h1 className='text-3xl font-semibold'>My Products : {sellerProduct.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Advertise</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellerProduct?.map((sp, i) => <tr key={sp._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{sp.name}</td>
                                <td>{sp.sellingPrice}$</td>
                                <td>
                                    <button className='btn btn-xs btn-outline'>Available</button>
                                </td>
                                <td>
                                    <button className="btn btn-xs btn-outline btn-info">Advertise</button>
                                </td>
                                <td>
                                    <button className="btn btn-xs btn-outline btn-error">Delete</button>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;



