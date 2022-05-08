import React from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';

const AddProduct = () => {
    return (
        <div className='w-75 mx-auto'>
            <h2 className='text-primary my-2'>Add Product</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Enter Brand Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name='password' placeholder="Price" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" name='password' placeholder="Quantity" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control type="text" name='password' placeholder="Short Description" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Supplier Name</Form.Label>
                    <Form.Control type="text" name='password' placeholder="Supplier Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Supplier Email</Form.Label>
                    <Form.Control type="text" name='password' placeholder="Supplier Email" required />
                </Form.Group>

                <Form.Label htmlFor="basic-url">Your Photo URL</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3">
                        https://example.com/users/
                    </InputGroup.Text>
                    <FormControl id="basic-url" aria-describedby="basic-addon3" placeholder='Photo URL'/>
                </InputGroup>



                <Button variant="primary" type="submit" className='w-50 mx-auto btn btn-primary mt-2'>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddProduct;