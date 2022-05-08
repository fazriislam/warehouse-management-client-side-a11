import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Rating from './Rating/Rating';

const Ratings = () => {
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/rating')
            .then(res => res.json())
            .then(data => setRatings(data.slice(0, 3)))
    }, [ratings]);

    return (
        <div className='w-75 mt-3 mx-auto bg-danger p-3'>
            <div className='product-card-container mb-2'>
                {
                    ratings.map(userRating => <Rating
                        key={userRating._id}
                        userRating={userRating}
                    />)
                }
            </div>
            <Button className='bg-dark text-white'>See All Review</Button>
        </div>
    );
};

export default Ratings;