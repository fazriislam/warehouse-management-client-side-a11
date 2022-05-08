import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = product => {
        console.log(product);
        const url = 'http://localhost:5000/product';
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(result=> {
            console.log(result);
        });
    };
    return (
        <div className='w-75 mx-auto'>
            <h2 className='text-primary my-2'>Add Product</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='Name' {...register("name")} />
                <input className='mb-3' placeholder='Brand' {...register("company")} />

                <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-3' placeholder='Quantity' type="number" {...register("quantity")} />

                <textarea className='mb-3' placeholder='Description' {...register("description")} />

                <input className='mb-3' placeholder='Supplier Name' {...register("supplierName")} />
                <input className='mb-3' placeholder='Supplier Email' {...register("supplierEmail")} />

                <input className='mb-3' placeholder='photo URL' type="text" {...register("img")} />
                <input type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;