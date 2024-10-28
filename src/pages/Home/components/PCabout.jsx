import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import { useTranslation } from 'react-i18next';

const PCabout = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: 'ease-in-out', 
        });
    }, []);

    const { t } = useTranslation();

    return (
        <div className="premiumPC">
            <div className="container">
                <div className="prePc-text" data-aos="flip-right">
                    <h2 id='prosText'>{t('PCabout.0')}</h2>
                    <h3 id='pcBuild'>{t('PCabout.1')}</h3>
                    <p>{t('PCabout.2')} <br />{t('PCabout.3')}</p>
                </div>

                <div className="prePc-boxes">
                    <div className="row">
                        <div className="col-lg-3" id='pc' data-aos="flip-right" data-aos-delay="100">
                            <div className="prePc-box1">
                                <div className="prePc-name">{t('PCabout.4')}</div>
                                <div className="prePc-plan">
                                    <div className="plan-price">
                                        <span id='dolar'>$</span>
                                        <span id='price'>1000</span>
                                        <p id='month'>{t('PCabout.5')}</p>
                                    </div>
                                    <div className="plan-about">
                                        <div className="wd-plan-feature">i3 or Ryzen 3</div>
                                        <div className="wd-plan-feature">8GB RAM</div>
                                        <div className="wd-plan-feature">1050Ti</div>
                                        <div className="wd-plan-feature">120GB SSD</div>
                                    </div>
                                    <div className="plan-buy">
                                        <NavLink to="/add"><button>{t('PCabout.6')}</button></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3" id='pc' data-aos="flip-right" data-aos-delay="200">
                            <div className="prePc-box1">
                                <div className="prePc-name">{t('PCabout.7')}</div>
                                <div className="prePc-plan">
                                    <div className="plan-price">
                                        <span id='dolar'>$</span>
                                        <span id='price'>1800</span>
                                        <p id='month'>{t('PCabout.5')}</p>
                                    </div>
                                    <div className="plan-about">
                                        <div className="wd-plan-feature">i5 or Ryzen 5</div>
                                        <div className="wd-plan-feature">16GB RAM</div>
                                        <div className="wd-plan-feature">1060</div>
                                        <div className="wd-plan-feature">240GB SSD</div>
                                    </div>
                                    <div className="plan-buy">
                                        <NavLink to="/add"><button>{t('PCabout.6')}</button></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 pc-3" id='pc' data-aos="flip-right" data-aos-delay="300">
                            <div className="prePc-box1">
                                <div className="prePc-name">{t('PCabout.8')}</div>
                                <div className="prePc-plan">
                                    <div className="plan-price">
                                        <span id='dolar'>$</span>
                                        <span id='price'>2500</span>
                                        <p id='month'>{t('PCabout.5')}</p>
                                    </div>
                                    <div className="plan-about">
                                        <div className="wd-plan-feature">i7 or Ryzen 7</div>
                                        <div className="wd-plan-feature">32GB RAM</div>
                                        <div className="wd-plan-feature">1070Ti</div>
                                        <div className="wd-plan-feature">480GB SSD</div>
                                    </div>
                                    <div className="plan-buy">
                                        <NavLink to="/add"><button>{t('PCabout.6')}</button></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3" id='pc' data-aos="flip-right" data-aos-delay="400">
                            <div className="prePc-box1">
                                <div className="prePc-name">{t('PCabout.9')}</div>
                                <div className="prePc-plan">
                                    <div className="plan-price">
                                        <span id='dolar'>$</span>
                                        <span id='price'>4000</span>
                                        <p id='month'>{t('PCabout.5')}</p>
                                    </div>
                                    <div className="plan-about">
                                        <div className="wd-plan-feature">i9 or Ryzen TR</div>
                                        <div className="wd-plan-feature">64GB RAM</div>
                                        <div className="wd-plan-feature">1080Ti</div>
                                        <div className="wd-plan-feature">1TB SSD</div>
                                    </div>
                                    <div className="plan-buy">
                                        <NavLink to="/add"><button>{t('PCabout.6')}</button></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PCabout;
