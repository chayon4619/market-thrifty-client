import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { _id, name, } = category
    return (
        <div>
            <Link to={`/category/${_id}`}>
                <button className="btn btn-outline btn-primary">{name}</button>
            </Link>
        </div>
    );
};

export default Category;