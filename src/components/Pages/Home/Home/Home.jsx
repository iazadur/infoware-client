import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import swal from 'sweetalert'

const Home = () => {

    const [carts, setCarts] = useState([])
    const [products, setProducts] = useState([])
    const [isLoading, setIsloading] = useState(false)




    useEffect(() => {
        axios.get('https://damp-thicket-32471.herokuapp.com/cart')
            .then(res => setCarts(res.data))
    }, [isLoading])
    useEffect(() => {
        axios.get('https://damp-thicket-32471.herokuapp.com/products')
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
        axios.post('https://damp-thicket-32471.herokuapp.com/cart', cartitem)
            .then(res => {
                if (res.data.insertedId) {
                    swal({
                        title: "Good job!",
                        text: "You Have the Product add to cart !",
                        icon: "success",
                        button: false,
                        timer: 1500

                    });
                    setIsloading(!isLoading)
                }
            })

    }

    return (
        <div>
            <Container className="mt-5">

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