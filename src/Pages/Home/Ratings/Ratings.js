import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Rating from './Rating/Rating';

const Ratings = () => {
    const [ratings, setRatings] = useState([]);
    const navigate=useNavigate();

    useEffect(() => {
        fetch('https://sheltered-springs-86908.herokuapp.com/rating')
            .then(res => res.json())
            .then(data => setRatings(data.slice(0, 3)))
    }, [ratings]);

    const navigateToAllReview = ()=>{
        navigate('/allReview');
    }

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
            <Button onClick={navigateToAllReview} className='bg-dark text-white'>See All Review</Button>
        </div>
    );
};

export default Ratings;