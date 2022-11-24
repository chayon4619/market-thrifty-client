import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageSeller = () => {

    const { data: seller, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/seller');
            const data = await res.json();
            return data;
        }
    });



    return (
        <div>
            <h1 className='text-4xl'>All Seller : {seller?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Is Verify</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            seller?.map((sl, i) => <tr key={sl._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{sl.name}</td>
                                <td>{sl.email}</td>
                                <td>
                                    <button className='btn btn-xs btn-outline'>Pending</button>
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

export default ManageSeller;