import React from 'react';
import {  Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {


    const navigate = useNavigate();

    let {_id, name, img, description, price, supplierName, quantity} = product;

    const handleUpdate = id =>{
        navigate(`/update/${id}`);
    }

    return (
        <Card className='bg-light' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Price: $ {price}</Card.Text>
                <Card.Text>Quantity: {quantity}</Card.Text>
                <Card.Text><small>Description: {description}</small></Card.Text>
                <Card.Text>Supplier: {supplierName}</Card.Text>
                <Button onClick={()=>handleUpdate(_id)} variant="primary">Update</Button>
            </Card.Body>
        </Card>
    );
};

export default Product;