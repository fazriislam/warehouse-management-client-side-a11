import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import UpdateForm from './UpdateForm/UpdateForm';

const UpdateProduct = () => {
    const [product, setProduct] = useState([]);
    const { productId } = useParams();





    useEffect(() => {
        fetch(`http://localhost:5000/update/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product]);

    const { name, img, company, price, quantity, description, supplierName, supplierEmail } = product;
    console.log(product);

    return (
        <div className='w-75 mx-auto'>
            <div>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>Brand: {company}</Card.Text>
                        <Card.Text>Price: $ {price}</Card.Text>
                        <Card.Text>Quantity: {quantity}</Card.Text>
                        <Card.Text><small>Description: {description}</small></Card.Text>
                        <Card.Text>Supplier: {supplierName}</Card.Text>
                        <Card.Text>Supplier email: {supplierEmail}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <UpdateForm />
            </div>
        </div>
    );
};

export default UpdateProduct;