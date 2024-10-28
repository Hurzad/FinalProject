import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { useTranslation } from 'react-i18next';

const Basket = () => {
    const {
        isEmpty,
        items,
        updateItemQuantity,
        emptyCart,
        removeItem,
        cartTotal,
    } = useCart();

    const navigate = useNavigate();

    const checkUser = () => {
        const isLogin = localStorage.getItem('login');
        if (isLogin === 'true') {
            navigate('/checkout')

        } else {
            alert('ugursuz emeliyyat')
        }
    }

    const { t } = useTranslation();

    return (
        <div className='basket-page'>
            {isEmpty ? (
                <div className='d-flex align-items-center justify-content-center empty-cart'>
                    <img id='basket-empty1' src="https://cdn.dribbble.com/users/146773/screenshots/4228811/dribble_cart.gif" alt="" />
                    <img id='basket-empty2' src="https://cdn-icons-png.flaticon.com/512/2762/2762885.png" alt="" />
                </div>
            ) : (
                <div className='container'>
                    <h1 className='text-center'>{t('Basket.0')}</h1>
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="col-9">
                            <table className="table-cart">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">{t('Basket.1')}</th>
                                        <th scope="col">{t('Basket.2')}</th>
                                        <th scope="col">{t('Basket.3')}</th>
                                        <th scope="col">{t('Basket.4')}</th>
                                        <th scope="col">{t('Basket.5')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item, index) => (
                                        <tr className='tr' key={item.id}>
                                            <th scope="row">{index + 1}</th>
                                            <td><img width={70} src={item.photo} alt="err" /></td>
                                            <td>{item.title}</td>
                                            <td>${Math.round(item.price * item.quantity)}</td>
                                            <td>
                                                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className='btn btn-warning'>-</button>
                                                <span className='mx-3'>{item.quantity}</span>
                                                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className='btn btn-warning'>+</button>
                                            </td>
                                            <td><button onClick={() => { removeItem(item.id) }} className='btn btn-danger'>X</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <h4 className='mt-5'>Total price: ${Math.round(cartTotal)}</h4>
                            <button onClick={checkUser} id='buy-now' className='btn btn-dark my-btn my-3 me-3'>{t('Basket.6')}</button>
                            <button onClick={() => { emptyCart() }} className='btn btn-danger my-3'>{t('Basket.7')}</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Basket;
