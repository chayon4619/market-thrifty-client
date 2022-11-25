import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading';

const ManageSeller = () => {

    const { data: seller, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/seller');
            const data = await res.json();
            return data;
        }
    });

    const handelDelete = (id) => {
        const agree = window.confirm('Are You sure to delete this seller?');
        if (agree) {
            fetch(`http://localhost:5000/seller/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch();
                        toast.success(`Seller deleted successfully`)
                    }
                })
        }
    }

    if (isLoading) {
        return <Loading></Loading>
    }

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
                                    <button onClick={() => handelDelete(sl._id)} className="btn btn-xs btn-outline btn-error">Delete</button>
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