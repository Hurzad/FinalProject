import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'aos/dist/aos.css';
import AOS from 'aos'; 
import { useTranslation } from 'react-i18next';
import { Header } from 'antd/es/layout/layout';

const Register = () => {
    const [user, setUser] = useState({
        fullname: "",
        tel: "",
        email: "",
        password: "",
        againPassword: "",
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const [showPassword, setShowPassword] = useState(false);

    const registerSubmit = (e) => {
        e.preventDefault();
        if (!user.fullname || !user.tel || !user.email || !user.password || !user.againPassword) {
            toast.warning('Please fill in all fields');
        } else {
            if (user.password === user.againPassword) {
                const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
                const existingUser = registeredUsers.find((u) => u.email === user.email);
                if (existingUser) {
                    toast.warning('Email already registered');
                } else {
                    registeredUsers.push(user);
                    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
                    setTimeout(() => {
                        window.location.assign("/login");
                    }, 2000);
                    toast.success('Registration successful');
                }
            } else {
                toast.warning('Passwords do not match');
            }
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    const { t } = useTranslation();

    return (
        <div className='register'>
            <div className="col-5 mx-auto" data-aos="fade-up">
                <h1 className=' text-center' data-aos="fade-down">{t('Register.0')}</h1>
                <form onSubmit={registerSubmit}>
                    <div className="mb-3" data-aos="fade-right">
                        <label className="form-label">{t('Register.1')}</label>
                        <input
                            type="text"
                            className="form-control"
                            name='fullname'
                            value={user.fullname}
                            onChange={handleChange}
                            aria-label="Full Name"
                        />
                    </div>
                    <div className="mb-3" data-aos="fade-right">
                        <label className="form-label">{t('Register.2')}</label>
                        <input
                            type="text"
                            className="form-control"
                            name='tel'
                            value={user.tel}
                            onChange={handleChange}
                            aria-label="Phone Number"
                        />
                    </div>
                    <div className="mb-3" data-aos="fade-right">
                        <label className="form-label">{t('Register.3')}</label>
                        <input
                            type="email"
                            className="form-control"
                            name='email'
                            value={user.email}
                            onChange={handleChange}
                            aria-label="Email Address"
                        />
                    </div>
                    <div className="mb-3" data-aos="fade-right">
                        <label className="form-label">{t('Register.4')}</label>
                        <div className="input-group">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="form-control"
                                name='password'
                                value={user.password}
                                onChange={handleChange}
                                aria-label="Password"
                            />
                            <span className="input-group-text" style={{ height: '38px' }} onClick={toggleShowPassword}>
                                {showPassword ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
                            </span>
                        </div>
                    </div>
                    <div className="mb-3" data-aos="fade-right">
                        <label className="form-label">{t('Register.5')}</label>
                        <input
                            type='password'
                            className="form-control"
                            name='againPassword'
                            value={user.againPassword}
                            onChange={handleChange}
                            aria-label="Confirm Password"
                        />
                    </div>
                    <button type="submit" className="btn btn-dark" data-aos="zoom-in">{t('Register.6')}</button>
                </form>
                <Link to='/login' id='register-btn' className='d-block mt-3 text-center btn btn-dark' data-aos="zoom-in">{t('Register.7')}</Link>
            </div>
        </div>
    );
};

export default Register;



















































































































// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const Register = () => {
//     const [user, setUser] = useState({
//         fullname: "",
//         tel: "",
//         email: "",
//         password: "",
//         againPassword: "",
//     });

//     const handleChange = (e) => {
//         setUser({ ...user, [e.target.name]: e.target.value });
//     };

//     const [showPassword, setShowPassword] = useState(false);

//     const registerSubmit = (e) => {
//         e.preventDefault();
//         if (!user.fullname || !user.tel || !user.email || !user.password || !user.againPassword) {
//             toast.warning('Please fill in all fields');
//         } else {
//             if (user.password === user.againPassword) {
//                 const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
//                 const existingUser = registeredUsers.find((u) => u.email === user.email);
//                 if (existingUser) {
//                     toast.warning('Email already registered');
//                 } else {
//                     registeredUsers.push(user);
//                     localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
//                     setTimeout(() => {
//                         window.location.assign("/login");
//                     }, 2000);
//                     toast.success('Registration successful');
//                 }
//             } else {
//                 toast.warning('Passwords do not match');
//             }
//         }
//     };

//     const toggleShowPassword = () => {
//         setShowPassword(!showPassword);
//     };

//     return (
//         <div className='container-fluid login'>
//             <div className="col-5">
//                 <h1 className='my-5' style={{ color: 'white' }}>Register</h1>
//                 <form onSubmit={registerSubmit}>
//                     <div className="mb-3">
//                         <label className="form-label">Full name</label>
//                         <input type="text" className="form-control" name='fullname' onChange={handleChange} />
//                     </div>
//                     <div className="mb-3">
//                         <label className="form-label">Phone number</label>
//                         <input type="text" className="form-control" name='tel' onChange={handleChange} />
//                     </div>
//                     <div className="mb-3">
//                         <label className="form-label">Email address</label>
//                         <input type="email" className="form-control" name='email' onChange={handleChange} />
//                     </div>
//                     <div className="mb-3">
//                         <label className="form-label">Password</label>
//                         <div className="input-group">
//                             <input
//                                 type={showPassword ? 'text' : 'password'}
//                                 className="form-control"
//                                 name='password'
//                                 onChange={handleChange}
//                             />
//                             <span className="input-group-text" style={{height:'38px'}} onClick={toggleShowPassword}>
//                                 {showPassword ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i>}
//                             </span>
//                         </div>
//                     </div>
//                     <div className="mb-3">
//                         <label className="form-label">Confirm Password</label>
//                         <input type='password' className="form-control" name='againPassword' onChange={handleChange} />
//                     </div>
//                     <button type="submit" className="btn btn-dark">Sign Up</button>
//                 </form>
//                 <Link to='/login' className='my-3 btn btn-dark'>Already have an account?</Link>
//             </div>
//         </div>
//     );
// };

// export default Register;
