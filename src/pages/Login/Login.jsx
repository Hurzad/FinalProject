import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import { useTranslation } from 'react-i18next';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000 });

        const isLoggedIn = localStorage.getItem("login");
        if (isLoggedIn) {
            navigate('/account');
        }
    }, [navigate]);



    const loginSubmit = (e) => {
        e.preventDefault();
        
        const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];


        const user = registeredUsers.find(
            (u) => u.email === email && u.password === password
        );

        if (user) {
            localStorage.setItem("login", "true");
            localStorage.setItem("user", "true");
            localStorage.setItem("activeUser", JSON.stringify(user));
            navigate('/account');
            window.location.reload();
        } else if (!email || !password) {
            toast.error('Please enter both email and password');
        } else {
            toast.error('Invalid email or password');
        }
    };

    const { t } = useTranslation();

    return (
        <div className="login" id='logins'  data-aos="fade-in">
            <div className="login-pages">
                <div className="col-5" data-aos="fade-up">
                    <h1 data-aos="fade-down">{t('Login.0')}</h1>
                    <form className='mt-4' onSubmit={loginSubmit}>
                        <div className="mb-3" data-aos="fade-up">
                            <label className="form-label">{t('Login.1')}</label>
                            <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" />
                        </div>
                        <div className="my-5" data-aos="fade-up">
                            <label className="form-label">{t('Login.2')}</label>
                            <div className="input-group">
                                <input onChange={e => setPassword(e.target.value)} type={showPassword ? "text" : "password"} className="form-control" />
                                <span className="input-group-text" style={{ cursor: 'pointer', height: '38px' }} onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                                </span>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-dark" data-aos="flip-right">{t('Login.3')}</button>
                    </form>
                    <span className='my-5 mt-4' data-aos="fade-up">{t('Login.4')}</span>
                    <Link to='/register' className="btn btn-dark ms-3" data-aos="flip-right">{t('Login.5')}</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;




















































































































// import { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const Login = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//     useEffect(() => {
//         const isLoggedIn = localStorage.getItem("login");
//         if (isLoggedIn) {
//             navigate('/account');
//         }
//     }, [navigate]);

//     const adminData = {
//         fullname: "Admin",
//         email: "admin@admin.com",
//         phone: "+994-00-111-22-33",
//         password: "123",
//         tel: "123",
//     };

//     const loginSubmit = (e) => {
//         e.preventDefault();
//         const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
//         const user = registeredUsers.find(
//             (u) => u.email === email && u.password === password
//         );
//         if (user) {
//             localStorage.setItem("login", "true");
//             localStorage.setItem("user", "true");
//             localStorage.setItem("activeUser", JSON.stringify(user));
//             navigate('/account');
//             window.location.reload()
//         } else if (adminData.email === email && adminData.password === password) {
//             localStorage.setItem("activeUser", JSON.stringify(adminData));
//             localStorage.setItem("login", "true");
//             localStorage.setItem("admin", "true");
//             navigate('/account');
//             window.location.reload()
//         } else if (!email || !password) {
//             toast.error('Please enter both email and password');
//         } else {
//             toast.error('Invalid email or password');
//         }
//     };

//     return (

//         <div className="login">
//             <div className="login-pages">
//                 <div className="col-5">
//                     <h1>Login</h1>
//                     <form className='mt-4' onSubmit={loginSubmit}>
//                         <div className="mb-3">
//                             <label className="form-label">Email address</label>
//                             <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" />
//                         </div>
//                         <div className="my-5">
//                             <label className="form-label">Password</label>
//                             <div className="input-group">
//                                 <input onChange={e => setPassword(e.target.value)} type={showPassword ? "text" : "password"} className="form-control" />
//                                 <span className="input-group-text" style={{ cursor: 'pointer', height: '38px' }} onClick={() => setShowPassword(!showPassword)}>
//                                     {showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
//                                 </span>
//                             </div>
//                         </div>
//                         <button type="submit" className="btn btn-dark">Login</button>
//                     </form>
//                   <span className='my-5 mt-4'> Don't have an account?</span>
//                     <Link to='/register' className="btn btn-dark ms-3">Sign Up</Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;
