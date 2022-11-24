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
        </div>
    );
};

export default MyProducts;



