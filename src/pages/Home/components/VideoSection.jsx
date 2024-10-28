import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const VideoSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
        });
    }, []);

    const { t } = useTranslation();

    return (
        <div className="videoTexts">
            <div className="videotexts-1" data-aos="fade-right">
                <h1>{t('VideoSection.0')}</h1>
                <h3>{t('VideoSection.1')}<br />{t('VideoSection.2')}</h3>
                <p>{t('VideoSection.3')} <br />
                    {t('VideoSection.4')}<br />
                    {t('VideoSection.5')}<br />
                    {t('VideoSection.6')}</p>
                <button id='white-btn' data-aos="fade-up"><Link to="/add">{t('VideoSection.7')}</Link></button> 
            </div>
            <div className="videotexts-2" data-aos="fade-left">
                <a className="video-link" target='_blank' href="http://www.youtube.com/watch?v=XHOmBV4js_E">
                    {/* <span> <i class="fa-solid fa-play"></i></span> */}
                    <img src="https://woodmart.b-cdn.net/wp-content/uploads/2018/10/black-electronics-costume-mod-opt.jpg.webp" alt="Video Thumbnail" />
                </a>
            </div>
        </div>
    );
}

export default VideoSection;
