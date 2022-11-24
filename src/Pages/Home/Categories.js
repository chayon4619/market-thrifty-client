import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {

    const [categoriesData, setCategoriesData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/category`)
            .then(res => res.json())
            .then(data => {
                setCategoriesData(data)
            })
    }, [])

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