import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import AuthBtn from '../components/Auth';
import { useTranslation } from 'react-i18next';
import i18 from '../i18n/i18next';
import { ModeContext } from '../context/ModeContext'
import { Button, Modal } from "antd";
import { useSelector } from 'react-redux';


const Header = () => {
    const { t } = useTranslation();

    const [mode, setMode] = useContext(ModeContext);
    const data = useSelector(p => p);

    const changeMyLng = (lang) => {
        i18.changeLanguage(lang);
    };


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [keyword, setKeyword] = useState('');


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        setKeyword('');
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setKeyword('');
    };

    const handleKeywordChange = (e) => {
        setKeyword(e.target.value.toLowerCase());
    };

    const handleItemClick = () => {
        setIsModalOpen(false);
    };


    const { totalItems } = useCart();
    const navigate = useNavigate();

    const [activeUser, setActiveUser] = useState(null);
    const [user, setUser] = useState({
        fullname: '',
        phone: '',
        email: '',
    });
    const [menuActive, setMenuActive] = useState(false);
    const [langMenuActive, setLangMenuActive] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('activeUser');
        setUser({
            fullname: 'Login',
            phone: '',
            email: '',
        });
        navigate('/login');
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("activeUser"));
        setActiveUser(user);
        window.scrollTo(0, 0);
    }, []);

    const isAdmin = activeUser && activeUser.email === "admin@admin.com";

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const toggleLangMenu = () => {
        setLangMenuActive(!langMenuActive);
    };

    return (
        <div className="core-head">
            <div className="container" id='header-nav'>
            <div className="top-bar-inners" id='top-bars'>
   

                <div className="top-bar-inner2">
                    <div className="inner2-barOne">
                        <a href="/"><i className="fa-brands fa-facebook"></i></a>
                        <a href="/"><i className="fa-solid fa-screwdriver-wrench"></i></a>
                        <a href="/"><i className="fa-brands fa-pinterest"></i></a>
                        <a href="/"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="/"><i className="fa-brands fa-telegram"></i></a>
                    </div>
                    <div className="inner-bar-line">|</div>
                    <Link to="/contact"><div className="inner2-barTwo">{t('header.3')}</div></Link>
                    <div className="inner-bar-line">|</div>
                    <Link to="/faq"><div className="inner2-barThree">{t('header.4')}</div></Link>
                </div>


                             <div className="top-bar-inner1">
                    <div className="inner1-barOne">
                        <div className="dropdown">
                            <button onClick={toggleLangMenu}>{t('header.1')}</button>
                            {langMenuActive && (
                                <div className="dropdown-content">
                                    <button id='btn-dark' onClick={() => changeMyLng('az')}>AZ</button>
                                    <button id='btn-dark' onClick={() => changeMyLng('en')}>EN</button>
                                    <button id='btn-dark' onClick={() => changeMyLng('rus')}>RUS</button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="inner-bar-line" id='core-line'>|</div>
                    <div className="inner2-barOne">
                    <button  className='btn btn-warning'
                    onClick={() => {
                        mode === 'dark' ? setMode('light') : setMode('dark')
                        mode === 'dark' ? localStorage.setItem("mode", 'light') : localStorage.setItem('mode', 'dark')
                    }}
                >{mode === "dark" ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}</button>
                    </div>

                </div>
            </div>

            <div className="hr"></div>

            <div className="header-navbar">
                <div className="header-navbar-img">
                    <img src="https://i.pinimg.com/originals/4a/c2/98/4ac298a7436daf6377a7952955f4c63c.png" alt="Logo" />
                </div>

                <div className="menu-toggle" onClick={toggleMenu}>☰</div>

                <div className={`header-pages ${menuActive ? 'active' : ''}`}>
                    <NavLink to="/"><div className="pageOne">{t('header.5')}</div></NavLink>
                    <div className="inner-bar-line">|</div>
                    <NavLink to="/add"><div className="pageTwo">{t('header.6')}</div></NavLink>
                    <div className="inner-bar-line">|</div>
                    {isAdmin && (
                        <>
                            <NavLink to="/dashboard"><div className="pageFour">{t('header.7')}</div></NavLink>
                            <div className="inner-bar-line">|</div>
                        </>
                    )}
                    <NavLink to="/about"><div className="pageFive">{t('header.8')}</div></NavLink>
                </div>

                <div className="header-page-logo">
                    <div className="header-search">
                        <Button type='dark' onClick={showModal} className='text-center'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </Button>
                        <Modal
                            className="custom-modal"
                            title={t("Product Search")}
                            open={isModalOpen}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            footer={null}
                        >
                            <div className="input-group mb-3">
                                <input
                                    onChange={handleKeywordChange}
                                    type="text"
                                    className="form-control"
                                    placeholder={t("Write products name")}
                                    aria-label={t("Search.label")}
                                    aria-describedby="basic-addon2"
                                />
                            </div>
                            <ul className="list-group">
                                {!keyword ? " " : data.filter(p => p.title.toLowerCase().includes(keyword)).map(item =>
                                    <li id='search-link'  key={item.id} className="list-group-item d-flex justify-content-start custom-link">
                                        <Link  to={`/add/${item.id}`} onClick={handleItemClick}>
                                            <img height={70} style={{ objectFit: "contain" }} width={70} src={item.photo} alt="img" />
                                            <span className='ms-3'>{item.title}</span>
                                        </Link>
                                    </li>
                                )}
                                {data.every(item => !item.title.toLowerCase().includes(keyword)) && (
                                    <p>No result</p>
                                )}
                            </ul>
                        </Modal>


                    </div>






                    <div className="header-wishlist">
                        <Link to="/wishlist"><i className="fa-regular fa-heart"></i></Link>
                    </div>

                    <AuthBtn />

                    <Link to="/basket">
                        <div className="header-basket">
                            <div type="button" className="position-relative">
                                <i className="fa-solid fa-cart-shopping"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {totalItems}
                                </span>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
        </div>
    );
};

export default Header;




















































































































































// import React, { useEffect, useState } from 'react';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { useCart } from 'react-use-cart';
// import AuthBtn from '../components/Auth';
// import { useTranslation } from 'react-i18next';
// import i18 from '../i18n/i18next';

// const Header = () => {
//     const { t } = useTranslation();

//     const changeMyLng = (lang) => {
//         i18.changeLanguage(lang);
//     };

//     const { totalItems } = useCart();
//     const navigate = useNavigate();

//     const [activeUser, setActiveUser] = useState(null);
//     const [user, setUser] = useState({
//         fullname: '',
//         phone: '',
//         email: '',
//     });
//     const [menuActive, setMenuActive] = useState(false);
//     const [langMenuActive, setLangMenuActive] = useState(false); // State for language dropdown

//     const handleLogout = () => {
//         localStorage.removeItem('login');
//         localStorage.removeItem('activeUser');
//         setUser({
//             fullname: 'Login',
//             phone: '',
//             email: '',
//         });
//         navigate('/login');
//     };

//     useEffect(() => {
//         const user = JSON.parse(localStorage.getItem("activeUser"));
//         setActiveUser(user);
//         window.scrollTo(0, 0);
//     }, []);

//     const isAdmin = activeUser && activeUser.email === "admin@admin.com";

//     const toggleMenu = () => {
//         setMenuActive(!menuActive);
//     };

//     const toggleLangMenu = () => {
//         setLangMenuActive(!langMenuActive);
//     };

//     return (
//         <div className="container" id='header-nav'>
//             <div className="top-bar-inners" id='top-bars'>
//                 <div className="top-bar-inner1">
//                     <div className="inner1-barOne">
//                         <div className="dropdown">
//                             <button onClick={toggleLangMenu}>Language</button>
//                             {langMenuActive && (
//                                 <div className="dropdown-content">
//                                     <button onClick={() => changeMyLng('az')}>az</button>
//                                     <button onClick={() => changeMyLng('en')}>en</button>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                     <div className="inner-bar-line" id='core-line'>|</div>
//                     <div className="inner1-barTwo">{t('header.0')}</div>
//                 </div>

//                 <div className="top-bar-inner2">
//                     <div className="inner2-barOne">
//                         <a href="/"><i className="fa-brands fa-facebook"></i></a>
//                         <a href="/"><i className="fa-solid fa-screwdriver-wrench"></i></a>
//                         <a href="/"><i className="fa-brands fa-pinterest"></i></a>
//                         <a href="/"><i className="fa-brands fa-linkedin-in"></i></a>
//                         <a href="/"><i className="fa-brands fa-telegram"></i></a>
//                     </div>
//                     <div className="inner-bar-line">|</div>
//                     <Link to="/contact"><div className="inner2-barTwo">CONTACT US</div></Link>
//                     <div className="inner-bar-line">|</div>
//                     <Link to="/faq"><div className="inner2-barThree">FAQS</div></Link>
//                 </div>
//             </div>

//             <div className="hr"></div>

//             <div className="header-navbar">
//                 <div className="header-navbar-img">
//                     <img src="https://i.pinimg.com/originals/4a/c2/98/4ac298a7436daf6377a7952955f4c63c.png" alt="Logo" />
//                 </div>

//                 <div className="menu-toggle" onClick={toggleMenu}>☰</div>

//                 <div className={`header-pages ${menuActive ? 'active' : ''}`}>
//                     <NavLink to="/"><div className="pageOne">Home</div></NavLink>
//                     <div className="inner-bar-line">|</div>
//                     <NavLink to="/add"><div className="pageTwo">Shop</div></NavLink>
//                     <div className="inner-bar-line">|</div>
//                     {isAdmin && (
//                         <>
//                             <NavLink to="/dashboard"><div className="pageFour">Dashboard</div></NavLink>
//                             <div className="inner-bar-line">|</div>
//                         </>
//                     )}
//                     <NavLink to="/about"><div className="pageFive">About</div></NavLink>
//                 </div>

//                 <div className="header-page-logo">
//                     <div className="header-search">
//                         <i className="fa-solid fa-magnifying-glass"></i>
//                     </div>

//                     <div className="header-wishlist">
//                         <Link to="/wishlist"><i className="fa-regular fa-heart"></i></Link>
//                     </div>

//                     <AuthBtn />

//                     <Link to="/basket">
//                         <div className="header-basket">
//                             <div type="button" className="position-relative">
//                                 <i className="fa-solid fa-cart-shopping"></i>
//                                 <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//                                     {totalItems}
//                                 </span>
//                             </div>
//                         </div>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Header;
