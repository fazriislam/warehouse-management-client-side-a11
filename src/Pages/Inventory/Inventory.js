import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './inventory.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Inventory = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products]);

    const handleAddToMyItems = id => {

        let myItems;
        const selectedProduct = products.find(product => product._id === id);
        myItems = selectedProduct;
    //     console.log(myItems);
        fetch('http://localhost:5000/myItem',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(myItems)
        })
        .then(res=>res.json())
        .then(result=>console.log(result))

    };



    return (
        <div className='w-75 mt-3 mx-auto md:border p-3'>
            <h2 className='text-primary mb-3'>All Products</h2>
            <Link to='/addProduct'>Add Product</Link>
            <div>
                {
                    <Link to='/myItems'>My Items</Link>

                }
            </div>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        handleAddToMyItems={handleAddToMyItems}
                    />)
                }
            </div>

        </div>
    );
};

export default Inventory;