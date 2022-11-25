import React from 'react';
import AdvertisedProduct from './AdvertisedProduct';
import Banner from './Banner';
import Categories from './Categories';
import Stats from './Stats';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <AdvertisedProduct></AdvertisedProduct>
            <Stats></Stats>
        </div>
    );
};

export default Home;