import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useTranslation } from 'react-i18next';

const Links = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
        });
    }, []);

    const { t } = useTranslation();

    return (
        <div className="sectionOne">
            <div className="row">
                <div className="sec1-boxes">
                    <NavLink to="/add" data-aos="flip-left">
                        <div className="col-lg-2 box">
                            <div className="box-sec1">
                                <a href="">
                                    <img style={{ maxHeight: "400px" }} src="https://woodmart.b-cdn.net/wp-content/uploads/2018/10/black-electronics-category-2-opt.jpg.webp" alt="" />
                                </a>
                                <div className="sec1-texts">
                                    <div className="pil-1">
                                        <h2>{t('sectionOne.0')}</h2>
                                    </div>
                                    <div className="pil-2">
                                        <h3>{t('sectionOne.1')}</h3> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NavLink>

                    <NavLink to="/add" data-aos="flip-left" data-aos-delay="100">
                        <div className="col-lg-2 box">
                            <div className="box-sec2">
                                <a href="">
                                    <img style={{ maxHeight: "400px" }} src="https://woodmart.b-cdn.net/wp-content/uploads/2018/10/black-electronics-category-5-opt.jpg.webp" alt="" />
                                </a>
                                <div className="sec1-texts">
                                    <div className="pil-1">
                                        <h2>{t('sectionOne.2')}</h2> 
                                    </div>
                                    <div className="pil-2">
                                        <h3>{t('sectionOne.3')}</h3> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NavLink>

                    <NavLink to="/add" data-aos="flip-left" data-aos-delay="200">
                        <div className="col-lg-2 box">
                            <div className="box-sec3">
                                <a href="">
                                    <img style={{ maxHeight: "400px" }} src="https://woodmart.b-cdn.net/wp-content/uploads/2018/10/black-electronics-category-4-opt.jpg.webp" alt="" />
                                </a>
                                <div className="sec1-texts">
                                    <div className="pil-1">
                                        <h2>{t('sectionOne.4')}</h2> 
                                    </div>
                                    <div className="pil-2">
                                        <h3>{t('sectionOne.5')}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NavLink>

                    <NavLink to="/add" data-aos="flip-left" data-aos-delay="300">
                        <div className="col-lg-2 box">
                            <div className="box-sec4">
                                <a href="">
                                    <img style={{ maxHeight: "400px" }} src="https://woodmart.b-cdn.net/wp-content/uploads/2018/10/black-electronics-category-6-opt.jpg.webp" alt="" />
                                </a>
                                <div className="sec1-texts">
                                    <div className="pil-1">
                                        <h2>{t('sectionOne.6')}</h2>
                                    </div>
                                    <div className="pil-2">
                                        <h3>{t('sectionOne.7')}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NavLink>

                    <NavLink to="/add" data-aos="flip-left" data-aos-delay="400">
                        <div className="col-lg-2 box">
                            <div className="box-sec5">
                                <a href="">
                                    <img style={{ maxHeight: "400px" }} src="https://woodmart.b-cdn.net/wp-content/uploads/2018/10/black-electronics-category-1-opt.jpg.webp" alt="" />
                                </a>
                                <div className="sec1-texts">
                                    <div className="pil-1">
                                        <h2>{t('sectionOne.8')}</h2>
                                    </div>
                                    <div className="pil-2">
                                        <h3>{t('sectionOne.9')}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NavLink>

                    <NavLink to="/add" data-aos="flip-left" data-aos-delay="500">
                        <div className="col-lg-2 box">
                            <div className="box-sec6">
                                <a href="">
                                    <img style={{ maxHeight: "400px" }} src="https://woodmart.b-cdn.net/wp-content/uploads/2018/10/black-electronics-category-3-opt.jpg.webp" alt="" />
                                </a>
                                <div className="sec1-texts">
                                    <div className="pil-1">
                                        <h2>{t('sectionOne.10')}</h2>
                                    </div>
                                    <div className="pil-2">
                                        <h3>{t('sectionOne.11')}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Links;

























































































































// import React, { useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import 'aos/dist/aos.css';
// import AOS from 'aos';
// import { useTranslation } from 'react-i18next';

// const Links = () => {
//     useEffect(() => {
//         AOS.init({
//             duration: 1000, 
//         });
//     }, []);

//     const { t } = useTranslation();

//     return (
//         <div className="sectionOne">
//             <div className="row">
//                 <div className="sec1-boxes">
//                     <NavLink to="/add" data-aos="flip-left">
//                         <div className="col-lg-2 box">
//                             <div className="box-sec1">
//                                 <a href="">
//                                     <img style={{ maxHeight: "400px" }} src="https://woodmart.b-cdn.net/wp-content/uploads/2018/10/black-electronics-category-2-opt.jpg.webp" alt="" />
//                                 </a>
//                                 <div className="sec1-texts">
//                                     <div className="pil-1">
//                                         <h2>{t('sectionOne.0')}</h2>
//                                     </div>
//                                     <div className="pil-2">
//                                         <h3>{t('sectionOne.1')}</h3>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </NavLink>

//                     <NavLink to="/add" data-aos="flip-left" data-aos-delay="100">
//                         <div className="col-lg-2 box">
//                             <div className="box-sec2">
//                                 <a href="">
//                                     <img style={{ maxHeight: "400px" }} src="https://woodmart.b-cdn.net/wp-content/uploads/2018/10/black-electronics-category-5-opt.jpg.webp" alt="" />
//                                 </a>
//                                 <div className="sec1-texts">
//                                     <div className="pil-1">
//                                         <h2>LIGHTING</h2>
//                                     </div>
//                                     <div className="pil-2">
//                                         <h3>Products</h3>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </NavLink>

//                     <NavLink to="/add" data-aos="flip-left" data-aos-delay="200">
//                         <div className="col-lg-2 box">
//                             <div className="box-sec3">
//                                 <a href="">
//                                     <img style={{ maxHeight: "400px" }} src="https://woodmart.b-cdn.net/wp-content/uploads/2018/10/black-electronics-category-4-opt.jpg.webp" alt="" />
//                                 </a>
//                                 <div className="sec1-texts">
//                                     <div className="pil-1">
//                                         <h2>FURNITURE</h2>
//                                     </div>
//                                     <div className="pil-2">
//                                         <h3>Products</h3>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </NavLink>

//                     <NavLink to="/add" data-aos="flip-left" data-aos-delay="300">
//                         <div className="col-lg-2 box">
//                             <div className="box-sec4">
//                                 <a href="">
//                                     <img style={{ maxHeight: "400px" }} src="https://woodmart.b-cdn.net/wp-content/uploads/2018/10/black-electronics-category-6-opt.jpg.webp" alt="" />
//                                 </a>
//                                 <div className="sec1-texts">
//                                     <div className="pil-1">
//                                         <h2>ACCESSORIES</h2>
//                                     </div>
//                                     <div className="pil-2">
//                                         <h3>Products</h3>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </NavLink>

//                     <NavLink to="/add" data-aos="flip-left" data-aos-delay="400">
//                         <div className="col-lg-2 box">
//                             <div className="box-sec5">
//                                 <a href="">
//                                     <img style={{ maxHeight: "400px" }} src="https://woodmart.b-cdn.net/wp-content/uploads/2018/10/black-electronics-category-1-opt.jpg.webp" alt="" />
//                                 </a>
//                                 <div className="sec1-texts">
//                                     <div className="pil-1">
//                                         <h2>COOKING</h2>
//                                     </div>
//                                     <div className="pil-2">
//                                         <h3>Products</h3>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </NavLink>

//                     <NavLink to="/add" data-aos="flip-left" data-aos-delay="500">
//                         <div className="col-lg-2 box">
//                             <div className="box-sec6">
//                                 <a href="">
//                                     <img style={{ maxHeight: "400px" }} src="https://woodmart.b-cdn.net/wp-content/uploads/2018/10/black-electronics-category-3-opt.jpg.webp" alt="" />
//                                 </a>
//                                 <div className="sec1-texts">
//                                     <div className="pil-1">
//                                         <h2>TOYS</h2>
//                                     </div>
//                                     <div className="pil-2">
//                                         <h3>Products</h3>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </NavLink>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Links;
