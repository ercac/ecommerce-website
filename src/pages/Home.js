import React from 'react';
import ProductCard from 'src\components\ProductCard.js';

const Home = () => {
    const products = [
        { id:1, name:'Product 1', price:10, image: 'https://via.placeholder.com/150'},
        { id:2, name:'Product 2', price:30, image: 'https://via.placeholder.com/150'},
    ];
    return (
        <div>
            <h1>Products</h1>
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;