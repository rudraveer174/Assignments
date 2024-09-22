import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>{product.description.substring(0, 100)}...</p>
        </div>
    );
};

export default ProductCard;