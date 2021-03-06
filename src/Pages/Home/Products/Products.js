import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-springs-86908.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)));
    }, []);

    return (
        <div className='w-75 mt-3 mx-auto p-3'>
            <h2 className='text-primary mb-3'>Our Products</h2>
            <div className='product-card-container'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
        </div>
    );
};

export default Products;