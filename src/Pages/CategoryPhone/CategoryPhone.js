import React from 'react';
import PhoneCard from './PhoneCard';

const CategoryPhone = () => {

    const phoneData = [
        {
            _id: 1,
            categoryId: 1,
            name: "iphone 11 pro",
            buyingPrice: 199,
            sellingPrice: 129,
            condition: "Good",
            phoneNumber: "01759761417",
            location: "Dhaka",
            purchaseYear: "2021",
            description: "This phone is very good condition.Battrey condition is also good",
            sellerName: "Monjur Rahman",
            postedTime: "12.00 AM",
            img: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"

        },
        {
            _id: 2,
            categoryId: 1,
            name: "iphone 12 pro max",
            buyingPrice: 199,
            sellingPrice: 129,
            condition: "Good",
            phoneNumber: "01759761417",
            location: "Dhaka",
            purchaseYear: "2021",
            description: "This phone is very good condition.Battrey condition is also good",
            sellerName: "Monjur Rahman",
            postedTime: "12.00 AM",
            img: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80"

        },
        {
            _id: 3,
            categoryId: 1,
            name: "samsung",
            buyingPrice: 199,
            sellingPrice: 129,
            condition: "Good",
            phoneNumber: "01759761417",
            location: "Dhaka",
            purchaseYear: "2021",
            description: "This phone is very good condition.Battrey condition is also good",
            sellerName: "Monjur Rahman",
            postedTime: "12.00 AM",
            img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"

        },
        {
            _id: 4,
            categoryId: 1,
            name: "Samsung",
            buyingPrice: 199,
            sellingPrice: 129,
            condition: "Good",
            phoneNumber: "01759761417",
            location: "Dhaka",
            purchaseYear: "2021",
            description: "This phone is very good condition.Battrey condition is also good",
            sellerName: "Monjur Rahman",
            postedTime: "12.00 AM",
            img: "https://images.unsplash.com/photo-1611407019488-0a354195b618?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8U2Ftc3VuZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"

        },
        {
            _id: 5,
            categoryId: 1,
            name: "Xiaomi",
            buyingPrice: 199,
            sellingPrice: 129,
            condition: "Good",
            phoneNumber: "01759761417",
            location: "Dhaka",
            purchaseYear: "2021",
            description: "This phone is very good condition.Battrey condition is also good",
            sellerName: "Monjur Rahman",
            postedTime: "12.00 AM",
            img: "https://images.unsplash.com/photo-1598327106026-d9521da673d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8WGlhb21pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

        },
        {
            _id: 6,
            categoryId: 1,
            name: "OnePlus",
            buyingPrice: 199,
            sellingPrice: 129,
            condition: "Good",
            phoneNumber: "01759761417",
            location: "Dhaka",
            purchaseYear: "2021",
            description: "This phone is very good condition.Battrey condition is also good",
            sellerName: "Monjur Rahman",
            postedTime: "12.00 AM",
            img: "https://images.unsplash.com/photo-1580521923679-6d275830d039?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8T25lcGx1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"

        },
    ]


    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10'>
                {
                    phoneData.map(phone => <PhoneCard
                        key={phone._id}
                        phone={phone}
                    ></PhoneCard>)
                }
            </div>
        </div>
    );
};

export default CategoryPhone;