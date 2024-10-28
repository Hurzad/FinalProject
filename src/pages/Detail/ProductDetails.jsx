import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCart } from 'react-use-cart';
import { toast } from 'react-toastify';
import { useWishlist } from "react-use-wishlist";
import { useTranslation } from 'react-i18next';

const Details = () => {
    const { id } = useParams(); 
    const data = useSelector(state => state);
    const details = data.find(p => p.id === parseInt(id));

    const { addItem } = useCart();

    const handleAddToCart = () => {
        addItem(details);
        toast.success("Product added to cart");
    };

    const { inWishlist, addWishlistItem, removeWishlistItem } = useWishlist();

    const handleToggleWishlist = () => {
        if (inWishlist(details.id)) {
            removeWishlistItem(details.id);
            toast.success("Product removed to wishlist");
        } else {
            console.log("Adding to wishlist:", details);
            addWishlistItem(details);
            toast.success("Product added to wishlist");
        }
    };

    const { t } = useTranslation();

    return (
        <div className='details-box'>
            {details === undefined ? (
                <h1>Loading...</h1>
            ) : (
                <div className="container col-xxl-8 px-4 py-5">
                    <h1 className='text-center'>{t('Details.0')}</h1>
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6 img-detail" >
                            <img src={details.photo} className="d-block mx-lg-auto img-fluid" alt={details.title} width={500} height={500} loading="lazy" />
                        </div>
                        <div className="col-lg-6 detail-main">
                            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 detail-title">{details.title}</h1>
                            <p className="lead"><b>{t('Details.1')}</b> ${details.price}</p>
                            <div className="button-group d-flex gap-2 mb-3">
                                <Link to="/add/" className="btn btn-dark btn-lg px-4 detail-back">{t('Details.2')}</Link>
                                <button onClick={handleAddToCart} className="details-btn btn btn-lg px-4"><i className="fa-solid fa-cart-shopping"></i></button>
                                <button onClick={handleToggleWishlist} className="btn btn-primary btn-lg px-4 detail-wish">
                                    {inWishlist(details.id) ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Details;