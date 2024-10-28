import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ModeContext } from '../context/ModeContext';
import Aos from 'aos';
import { useTranslation } from 'react-i18next';

import '../i18n/i18next';

const Admin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const adminData = {
        fullname: "Admin",
        email: "admin@admin.com",
        password: "123",
        phone: "+000-111-22-33"
    };

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("login");
        if (isLoggedIn) {
            navigate('/account');
        }
    }, [navigate]);

    const loginSubmit = (e) => {
        e.preventDefault();

        if (adminData.email === email && adminData.password === password) {
            localStorage.setItem("login", "true");
            localStorage.setItem("activeUser", JSON.stringify(adminData));
            navigate('/account');
            window.location.reload();
        } else if (!email || !password) {
            toast.info("Email or Passwor invalid");
        } else {
            toast.error("Successfully");
        }
    };

    const [mode] = useContext(ModeContext);
    const { t } = useTranslation();


    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, []);

    return (
        <div id='admin-page' className={`login ${mode}`}>
            <div className="container-fluid">
                {/* <div className="log-box">
                    <p data-aos="fade-down">{t("MyAccount.2")}</p>
                </div> */}
            </div>

            <div className="container d-flex align-items-center justify-content-center flex-column">
                <div className="col-6 my-5">
                    <h1 className="text-center my-5">Admin</h1>
                    <form onSubmit={loginSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input 
                                onChange={e => setEmail(e.target.value)} 
                                type="email" 
                                className="form-control" 
                                value={email}
                            />
                        </div>
                        <div className="my-5">
                            <label className="form-label">Password</label>
                            <div className="input-group">
                                <input 
                                    onChange={e => setPassword(e.target.value)} 
                                    type={showPassword ? "text" : "password"} 
                                    className="form-control" 
                                    value={password}
                                />
                                <span 
                                    className="input-group-text" 
                                    style={{ cursor: 'pointer', height: '38px' }} 
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                                </span>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-dark   admin-btn">Giris</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;