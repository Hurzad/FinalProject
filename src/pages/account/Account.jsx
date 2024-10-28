import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Account = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        fullname: '',
        phone: '1234567',
        email: '',
    });


    

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('login');
        if (!isLoggedIn) {
            navigate('/login');
        } else {
            const activeUser = JSON.parse(localStorage.getItem('activeUser'));
            if (activeUser) {
                setUser(activeUser);
            }
        }
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleLogout = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('activeUser');
        setUser({
            fullname: 'Login',
            phone: '',
            email: '',
        });
        navigate('/login');
        window.location.reload()
    };

    const { t } = useTranslation();

    return (

        <div className="account">
            <div className='container'>
                <div className="d-flex align-items-center justify-content-center flex-column">
                    <h1 className='my-5 '>{t('Account.0')}</h1>
                    <div className="col-6">
                        <form >
                            <div className="mb-3">
                                <label className="form-label">{t('Account.1')}</label>
                                <input
                                    name="fullname"
                                    type="text"
                                    className="form-control"
                                    value={user.fullname}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">{t('Account.2')}</label>
                                <input
                                    name="phone"
                                    type="phone"
                                    className="form-control"
                                    value={user.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">{t('Account.3')}</label>
                                <input
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    value={user.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </form>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <button onClick={handleLogout} className='btn btn-outline-danger mt-4'>{t('Account.4')}</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Account;
