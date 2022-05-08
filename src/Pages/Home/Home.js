import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Banner from './Banner/Banner';
import Products from './Products/Products';
import Ratings from './Ratings/Ratings';
import Review from './Review/Review';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Products/>
            {/* Extra Part One */}
            <Ratings/>
            {/* Extra Part Two */}
            <Review/>
        </div>
    );
};

export default Home;