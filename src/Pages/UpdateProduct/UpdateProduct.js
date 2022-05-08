import React, { useEffect, useState } from 'react';
// import { Button, Card } from 'react-bootstrap';
// import { Link, useParams } from 'react-router-dom';
// import Inventory from '../Inventory/Inventory';
// import UpdateForm from './UpdateForm/UpdateForm';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
// ------------------------------


const UpdateProduct = () => {
    const {id} = useParams()
    const [product , setProduct] = useState([]);

    useEffect(()=>{
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data));
    },[]);

    // const [product, setProduct] = useState([]);
    // const { productId } = useParams();
    // useEffect(() => {
    //     fetch(`http://localhost:5000/update/${productId}`)
    //         .then(res => res.json())
    //         .then(data => setProduct(data))
    // }, []);

    // const { name, img, company, price, quantity, description, supplierName, supplierEmail } = product;

    // const handleUpdate = () =>{
    //     console.log('clicked');
    // }
    // ------------------------------------------------------
    const { register, handleSubmit } = useForm();
    const onSubmit = UpdatedProduct => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url,{
            method:'Put',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(UpdatedProduct)
        })
        .then(res=>res.json())
        .then(result=> {
            console.log(result);
        });
    };

    return (
        <div className='w-75 mx-auto'>
            <h2>Update: {product.name}</h2>
            {/* <div>
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
            </div> */}
            <div>
            <h2 className='text-primary my-2'>Update Product</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='Name' {...register("name")} />
                <input className='mb-3' placeholder='Brand' {...register("company")} />

                <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-3' placeholder='Quantity' type="number" {...register("quantity")} />

                <textarea className='mb-3' placeholder='Description' {...register("description")} />

                <input className='mb-3' placeholder='Supplier Name' {...register("supplierName")} />
                <input className='mb-3' placeholder='Supplier Email' {...register("supplierEmail")} />

                <input className='mb-3' placeholder='photo URL' type="text" {...register("img")} />
                <input type="submit" value="Add Service" />
            </form>
            </div>
        </div>
    );
};

export default UpdateProduct;