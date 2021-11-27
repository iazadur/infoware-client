import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';

const Home = () => {

    const [products, setProducts] = useState([])
    const [carts, setCarts] = useState([])

    return (
        <div>
            <Container className="mt-5">
                <Row className="g-4">
                    <Col xs={12} md={8}>
                        <Products />
                    </Col>
                    <Col xs={12} md={4}>
                        <Cart />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;