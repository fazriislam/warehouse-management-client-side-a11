import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './inventory.css';
import { useNavigate, useParams } from 'react-router-dom';

const Inventory = () => {

    const [products, setProducts] = useState([]);
    const { productId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    // const handleUpdate = productId => {
    //     console.log(productId);
    //     navigate(`/update/${productId}`);
    // }
    return (
        <div className='w-75 mt-3 mx-auto md:border p-3'>
            <h2 className='text-primary mb-3'>All Products</h2>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        // handleUpdate={handleUpdate}
                    />)
                }
            </div>
        </div>
    );
};

export default Inventory;