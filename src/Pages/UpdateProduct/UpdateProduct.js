import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Inventory from '../Inventory/Inventory';
import UpdateForm from './UpdateForm/UpdateForm';

const UpdateProduct = () => {
    const [product, setProduct] = useState([]);
    const { productId } = useParams();





    useEffect(() => {
        fetch(`http://localhost:5000/update/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const { name, img, company, price, quantity, description, supplierName, supplierEmail } = product;

    // const handleUpdate = () =>{
    //     console.log('clicked');
    // }

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
                        <Button variant="primary">Delivered</Button>
                        <Button variant="primary">Restock</Button>
                        
                    </Card.Body>
                </Card>
            </div>
            <div className='my-3'>
                <UpdateForm product={product}/>
            </div>
            <div>
            <Link  to='/inventory' element={<Inventory/>}>Manage Inventory</Link>
            </div>
        </div>
    );
};

export default UpdateProduct;