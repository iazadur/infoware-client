import React from 'react';
import { Row } from 'react-bootstrap'
import Product from './Product';

const Products = () => {
    const productData = [
        {
            _id:"01",
            name:"Spicy Paneer Pizza",
            price:'290',
            desc:" Spicy Paneer made with Kashmiri and Birds Eye Chilli Drizzled with our House Spicy Mayonnaise!"
        },
        {
            _id:"02",
            name:"Spicy Paneer Pizza",
            price:'290',
            desc:" Spicy Paneer made with Kashmiri and Birds Eye Chilli Drizzled with our House Spicy Mayonnaise!"
        },
        {
            _id:"03",
            name:"Spicy Paneer Pizza",
            price:'290',
            desc:" Spicy Paneer made with Kashmiri and Birds Eye Chilli Drizzled with our House Spicy Mayonnaise!"
        },
        {
            _id:"04",
            name:"Spicy Paneer Pizza",
            price:'290',
            desc:" Spicy Paneer made with Kashmiri and Birds Eye Chilli Drizzled with our House Spicy Mayonnaise!"
        }
    ]
    return (
        <>
            <Row xs={1} md={2} className="g-4">
                {productData.map((singleProduct, idx) => (
                    <Product key={idx} singleProduct={singleProduct} />
                ))}
            </Row>
        </>
    );
};

export default Products;