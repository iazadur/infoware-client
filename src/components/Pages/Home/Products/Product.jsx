import React, { useState } from 'react';
import { Card, Col, Button } from 'react-bootstrap'
import productImage from '../../../../Asserts/product1.jpg'

const Product = ({singleProduct}) => {
    const [quaintity, setquaintity]=useState(1)
    const addToCart =(id)=>{
console.log(id)
    }
    return (
        <>
            <Col>
                <Card>
                    <Card.Img className="p-3 rounded-3" variant="top" src={productImage} />
                    <Card.Body>
                        
                            <Card.Title className="d-flex">{singleProduct.name}</Card.Title>
                    
                        
                        <div className="d-flex justify-content-between align-items-center">
                            <h6>$ {singleProduct.price}</h6>
                            <div className="d-flex justify-content-between w-50">
                                <Button onClick={() => quaintity >= 2 && setquaintity(quaintity - 1)}>-</Button>
                                <input value={quaintity} className="w-75" type="number" name="" id="" />
                                <Button onClick={() => setquaintity(quaintity + 1)}>+</Button>
                            </div>
                        </div>
                        <Card.Text>
                           {singleProduct.desc}
                        </Card.Text>
                        <Button onClick={()=>addToCart(singleProduct._id)}>Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Product;