import axios from 'axios';
import swal from 'sweetalert'
import React, {  useState } from 'react';
import { Badge, ListGroup } from 'react-bootstrap';


const Cart = ({ cart, setIsloading, isLoading }) => {
    const [cupon, setCupon] = useState([])
    const [discount, setDiscount] = useState(0)

    const quaintityPrice = cart?.map(o => o.price * o.quaintity)
    let totalAmmount = quaintityPrice?.reduce((a, b) => a + b, 0)



    const handleCupon = (e) => {
        e.preventDefault()

        let totalDiscount = 0
        if (cupon === 'less10') {
            totalDiscount = totalAmmount * 0.1
        }
        if (cupon === 'less15') {
            totalDiscount = totalAmmount * 0.15
        }
        setDiscount(totalAmmount - totalDiscount)
    }

    const deleteCartItem = (id) => {
        swal("Are you sure?", {
            dangerMode: true,
            buttons: true,
        })
            .then(res => {
                if (res) {
                    axios.delete(`http://localhost:5000/cart/${id}`)
                        .then(res => {
                            if (res.data.deletedCount) {
                                swal({
                                    title: "Good job!",
                                    text: "You Have successfully delete the item !",
                                    icon: "success",
                                    
                                  });
                                setIsloading(!isLoading)
                            }
                        })
                }
            })

    }
    return (
        <>
            <ListGroup as="ol" numbered>
                {cart.map(cartItem =>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold fs-5">{cartItem.name}</div>
                            <h3 className="fs-6 fw-bold"> {cartItem.quaintity} X {" $"}{cartItem.price}</h3>
                        </div>
                        <Badge variant="primary" pill>
                            ${cartItem.quaintity * cartItem.price}
                        </Badge> <br />
                        <Badge bg="danger" className="ms-2 user-select-none" onClick={() => deleteCartItem(cartItem._id)}>Delete</Badge>
                    </ListGroup.Item>


                )}
                <form onSubmit={handleCupon}>
                    <input onBlur={(e) => setCupon(e.target.value)} type="text" />
                    <button type="submit">Get Discount</button>
                </form>


                <h3>Total: ${discount ? discount : totalAmmount}</h3>

            </ListGroup>


        </>
    );
};

export default Cart;