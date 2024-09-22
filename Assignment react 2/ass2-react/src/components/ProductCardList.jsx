import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductCardList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                products.map(product => <ProductCard key={product.id} product={product} />)
            )}
        </div>
    );
};

export default ProductCardList;