// SingleCard.js
import React, { useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import swal from 'sweetalert';
import WishBtn from '../WishBtn';
import 'aos/dist/aos.css';
import AOS from 'aos'; 

const SingleCard = ({ alldata }) => {
    const { addItem } = useCart();

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <Col sm={12} md={3} className="mb-3" data-aos="flip-up">
            <Card className='card-product'>
                <Card.Img className='cart-img' variant="top" src={alldata.photo} />
                <Card.Body className='card-body'>
                    <Card.Title className='cart-title'>{alldata.title}</Card.Title>
                    <Card.Text className='cart-text'>{alldata.desc}</Card.Text>
                    <Card.Text className='cart-price'>${alldata.price}</Card.Text>
                    <Link className='more' to={`/add/${alldata.id}`}>
                        <button className="mb-2"><i class="fa-solid fa-angle-right"></i></button>
                    </Link>
                    <div className="wish"> <WishBtn product={alldata}/></div>
                    <button className='btn-add'
                        onClick={() => {
                            addItem(alldata);
                            swal("Added!","","success");
                        }}>
                        Add to Cart
                    </button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default SingleCard;
