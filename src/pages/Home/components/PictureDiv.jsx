import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos'; 
import { useTranslation } from 'react-i18next';

const PictureDiv = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const { t } = useTranslation();

    return (
        <div className="picturePurple">
            <div className="container">
                <div className="picturediv-ec">
                    <div className="picture" data-aos="fade-up"> 
                        <div className="girl-pic" data-aos="zoom-in"> 
                            <img src="https://woodmart.b-cdn.net/wp-content/uploads/2018/10/black-electronics-testimon-3-opt.jpg.webp" alt="Main" />
                        </div>
                        <div className="twopic">
                            <div className="pic-1" data-aos="fade-right"> 
                                <img src="https://woodmart.b-cdn.net/wp-content/uploads/2018/10/black-electronics-testimon-1-opt.jpg.webp" alt="Pic 1" />
                            </div>
                            <div className="pic-2" data-aos="fade-left"> 
                                <img src="https://woodmart.b-cdn.net/wp-content/uploads/2018/10/black-electronics-testimon-2-opt.jpg.webp" alt="Pic 2" />
                            </div>
                        </div>
                    </div>
                    <div className="picture-text" data-aos="fade-up"> 
                        <h1>{t('PictureDiv.0')}</h1>
                        <h2>{t('PictureDiv.1')}</h2>
                        <p>{t('PictureDiv.2')}</p>
                        <em>{t('PictureDiv.3')}</em>
                        <h5>{t('PictureDiv.4')}<img src="https://woodmart.b-cdn.net/wp-content/uploads/2018/10/black-electronics-autograph-opt.png.webp" alt="Autograph" /></h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PictureDiv;
