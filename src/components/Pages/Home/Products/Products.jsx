import React from 'react';
import { Row } from 'react-bootstrap'
import Product from './Product';

const Products = ({products,addToCart}) => {
    



    return (
        <>
            <Row xs={1} md={2} className="g-4">
                {products.map((singleProduct, idx) => (
                    <Product key={idx} singleProduct={singleProduct} addToCart={addToCart}/>
                ))}
            </Row>
        </>
    );
};

export default Products;