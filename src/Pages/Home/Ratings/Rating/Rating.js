import React from 'react';
import { Card } from 'react-bootstrap';

const Rating = ({userRating}) => {
    const {name,email,comment,rating} = userRating;
    return (
        <Card className='bg-dark text-white' style={{ width: '16rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Email: {email}</Card.Text>
                <Card.Text>Comment: {comment}</Card.Text>
                <Card.Text>Rating: {rating}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Rating;