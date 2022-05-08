import React from 'react';
import { Button, Card } from 'react-bootstrap';

const MyItem = ({ myItem, handleDelete }) => {
    let { _id, name, company, img, description, price, supplierEmail, supplierName, quantity } = myItem;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Brand: {company}</Card.Text>
                <Card.Text>Price: $ {price}</Card.Text>
                <Card.Text>Quantity: {quantity}</Card.Text>
                <Card.Text><small>Description: {description}</small></Card.Text>
                <Card.Text>Supplier: {supplierName}</Card.Text>
                <Card.Text>Supplier email: {supplierEmail}</Card.Text>
                <Button onClick={() =>handleDelete(_id)} variant="primary">Delete</Button>
                {/* <Button onClick={()=>handleAddToMyItems(_id)} variant="primary">Add to My Items</Button> */}
            </Card.Body>
        </Card>
    );
};

export default MyItem;