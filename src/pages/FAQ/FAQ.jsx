import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const { t } = useTranslation();

    return (
        <div className="faq">
            <img src="https://a-static.besthdwallpaper.com/asus-rog-republic-of-gamers-cybernetic-faith-wallpaper-1920x600-63779_57.jpg" alt="" data-aos="fade-up" />
            <div className="container">
                <h1 className='pt-5' data-aos="fade-up">{t('FAQ.0')}</h1>
                <h2 data-aos="fade-up">{t('FAQ.1')}</h2>
                <h3 data-aos="fade-up">{t('FAQ.2')}</h3>
                <div className="faq-circle mt-5">
                    <div className="faq-que" data-aos="fade-up">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        {t('FAQ.3')}
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>{t('FAQ.4')}</strong>{t('FAQ.5')}
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        {t('FAQ.6')}
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>{t('FAQ.7')}</strong>{t('FAQ.8')}
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        {t('FAQ.9')}
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>{t('FAQ.10')}</strong>{t('FAQ.11')}
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        {t('FAQ.12')}
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>{t('FAQ.13')}</strong>{t('FAQ.14')}
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        {t('FAQ.15')}
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>{t('FAQ.16')}</strong>{t('FAQ.17')}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="faq-photo" data-aos="fade-left">
                        <img src="https://rog.asus.com/dist/img/rog-404.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
