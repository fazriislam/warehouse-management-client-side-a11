import React from 'react';
import { Card } from 'react-bootstrap';

const Reviews = ({review}) => {
    const { name,email,rating,comment }= review;
    return (
        <Card className='bg-dark text-white' style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Email: {email}</Card.Text>
                <Card.Text>Comment: {comment}</Card.Text>
                <Card.Text>Rating: {rating}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Reviews;