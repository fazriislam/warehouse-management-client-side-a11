import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, img, price, company } = product;

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Price: $ {price}</Card.Text>
                <Card.Text>Brand: {company}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
                <Link className='btn btn-primary' to={'/inventory'}>Go somewhere</Link>
            </Card.Body>
        </Card>
    );
};

export default Product;