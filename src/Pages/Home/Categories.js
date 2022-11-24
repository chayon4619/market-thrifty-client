import React from 'react';
import Category from './Category';

const Categories = () => {


    const categoriesData = [
        {
            _id: 1,
            name: 'iPhone',
        },
        {
            _id: 2,
            name: 'Samsung',
        },
        {
            _id: 3,
            name: 'OnePlus',
        },
        {
            _id: 4,
            name: 'Xiaomi',
        },
        {
            _id: 5,
            name: 'Huawei',
        },
        {
            _id: 6,
            name: 'Others',
        },
    ]



    return (
        <div>
            <h1 className='text-center font-bold text-5xl text-cyan-600'>Categories</h1>
            <div className='grid grid-cols-4 md:grid-cols-6 mt-6 gap-6'>
                {
                    categoriesData.map(category => <Category
                        key={category._id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;