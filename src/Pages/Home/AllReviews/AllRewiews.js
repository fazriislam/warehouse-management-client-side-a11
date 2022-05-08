import React, { useEffect, useState } from 'react';
import Review from './Review/Reviews';

const AllRewiews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/rating')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews]);

    return (
        <div className='w-75 mt-3 mx-auto p-3 bg-light'>
            <div className='product-card-container mb-2'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    />)
                }
            </div>
        </div>
    );
};

export default AllRewiews;