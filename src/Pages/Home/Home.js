import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Banner from './Banner/Banner';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Products/>
        </div>
    );
};

export default Home;