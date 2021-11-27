import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';

const Home = () => {

    const [carts, setCarts] = useState([])
    const [products, setProducts] = useState([])
    const [update, setUpdate] = useState('')
    const [isLoading, setIsloading] = useState(false)




    useEffect(() => {
        axios.get('http://localhost:5000/cart')
            .then(res => setCarts(res.data))
    }, [update, isLoading])
    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(res => setProducts(res.data))
    }, [])


    const addToCart = (singleProduct, quaintity) => {
        // const exists = carts.find(pd => pd.productid === singleProduct.id);
        // let cartitem = {}
        
        // if (exists) {
        //     exists.quaintity = exists.quaintity + quaintity;
        //     cartitem = { ...exists }
        // } else {
        //     cartitem.productid = singleProduct._id
        //     delete singleProduct._id
        //     cartitem = { ...singleProduct, quaintity }
        // }
        // if (cartitem) {
            let cartitem = {}
            delete singleProduct._id
            cartitem = { ...singleProduct, quaintity }
            axios.post('http://localhost:5000/cart', cartitem)
                .then(res => {
                    if (res.data.insertedId) {
                        setUpdate(`Add to cart successfully! ${res.data.insertedId}`)
                    }
                })
        
    }

    return (
        <div>
            <Container className="mt-5">
                <div >{update.split("!")[0]}</div>
                <Row className="g-4">
                    <Col xs={12} md={8}>
                        <Products products={products} addToCart={addToCart} />
                    </Col>
                    <Col xs={12} md={4}>
                        <Cart cart={carts} setIsloading={setIsloading} isLoading={isLoading} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;