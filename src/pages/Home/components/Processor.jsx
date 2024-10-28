import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos'; 
import { useTranslation } from 'react-i18next';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Processor = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
        });
    }, []);

    const { t } = useTranslation();

    return (
        <div className="black-PC">
            <div className="sectionsPC">
                <div className="secOne" data-aos="fade-up">
                    <div className="pcPhoto">
                        <img id='pros' src="https://woodmart.xtemos.com/wp-content/uploads/2018/03/nzxt-1c.png" alt="PC Photo" />
                    </div>
                    <div className="pcAbout"></div>
                </div>

                <div className="secTwo" data-aos="fade-up">
                    <h1>{t('Processor.0')}</h1>
                    <h3 id='PC1'>{t('Processor.1')}</h3>
                    <p>{t('Processor.2')}<br />{t('Processor.3')}</p>
                    <div className="pcObjects">
                        <div className="pcOne" data-aos="fade-left">
                            <div className="pcOne-img">
                                <img src="https://woodmart.xtemos.com/wp-content/uploads/2018/03/black-electronics-vcard.svg" alt="10+ inch GPU" />
                            </div>
                            <div className="pcOne-text">
                                <h5>{t('Processor.4')}</h5>
                                <h6>{t('Processor.5')}</h6>
                            </div>
                        </div>
                        <div className="pcTwo" data-aos="fade-right">
                            <div className="pcTwo-img">
                                <img src="https://woodmart.xtemos.com/wp-content/uploads/2018/03/black-electronics-ram.svg" alt="8 RAM SLOTS" />
                            </div>
                            <div className="pcTwp-text">
                                <h5>{t('Processor.6')}</h5>
                                <h6>{t('Processor.7')}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="pcBtns">
                        <button id='pcPurple' data-aos="zoom-in"><Link to="/add">{t('Processor.8')}</Link></button> 
                        <button id='pc-Case' data-aos="zoom-in"><Link to="/add">{t('Processor.9')}</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Processor;
