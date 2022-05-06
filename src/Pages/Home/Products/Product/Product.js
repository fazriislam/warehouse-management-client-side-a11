import React from 'react';
import {  Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({ product }) => {


    const navigate = useNavigate();

    let {_id, name, company, img, description, price, supplierEmail, supplierName, quantity} = product;

    const handleUpdate = id =>{
        // console.log(id);
        navigate(`/update/${id}`);
    }


    // const { name, img, price, company } = product;

    return (
        <Card style={{ width: '18rem' }}>
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
        // -------------------------------
        // <Card style={{ width: '18rem' }}>
        //     <Card.Img variant="top" src={img} />
        //     <Card.Body>
        //         <Card.Title>{name}</Card.Title>
        //         <Card.Text>Price: $ {price}</Card.Text>
        //         <Card.Text>Brand: {company}</Card.Text>
        //         <Button variant="primary">Update</Button>
        //         {/* <Link className='btn btn-primary' to={'/inventory'}></Link> */}
        //     </Card.Body>
        // </Card>
    );
};

export default Product;