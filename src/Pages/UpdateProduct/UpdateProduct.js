import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([]);
    const { name, img, quantity } = product;
    console.log(quantity);

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);


    const handleRestock = () =>{
       const amount = prompt(`How many ${name} you want restock?`);
       console.log(amount);
       const newQuantity = parseInt(quantity) + parseInt(amount);
    }


    const { register, handleSubmit } = useForm();
    const onSubmit = UpdatedProduct => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedProduct)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            });
    };

    return (
        <div className='w-75 mx-auto'>
            <div className='border mt-2 p-2'>
            <h2 className='text-primary'>{name}</h2>
            <img src={img} alt="" />
            <p>Quantity: {quantity}</p>
            <Button className='me-2' variant='primary'>Delivered</Button>
            <Button onClick={handleRestock} variant='primary'>Restock</Button>
            </div>
            <div>
                <h2 className='text-primary my-2'>Update information of {name}</h2>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-3' placeholder='Name' {...register("name")} />
                    <input className='mb-3' placeholder='Brand' {...register("company")} />

                    <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
                    <input className='mb-3' placeholder='Quantity' type="number" {...register("quantity")} />

                    <textarea className='mb-3' placeholder='Description' {...register("description")} />

                    <input className='mb-3' placeholder='Supplier Name' {...register("supplierName")} />
                    <input className='mb-3' placeholder='Supplier Email' {...register("supplierEmail")} />

                    <input className='mb-3' placeholder='photo URL' type="text" {...register("img")} />
                    <input type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;