import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import { useTranslation } from 'react-i18next';

const ImagesSection = () => {
  const [modalImage, setModalImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const imageUrls = [
    'https://woodmart.b-cdn.net/wp-content/uploads/2018/10/black-electronics-gallary-8-opt-480x339.jpg',
    'https://woodmart.b-cdn.net/wp-content/uploads/2018/10/black-electronics-gallary-1-opt-1-480x339.jpg',
    'https://woodmart.b-cdn.net/wp-content/uploads/2018/10/black-electronics-gallary-2-opt-480x339.jpg',
    'https://woodmart.b-cdn.net/wp-content/uploads/2018/10/black-electronics-gallary-3-opt-480x339.jpg',
    'https://woodmart.b-cdn.net/wp-content/uploads/2018/10/black-electronics-gallary-4-opt-480x339.jpg',
    'https://woodmart.b-cdn.net/wp-content/uploads/2018/10/black-electronics-gallary-5-opt-480x339.jpg',
    'https://woodmart.b-cdn.net/wp-content/uploads/2018/10/black-electronics-gallary-6-opt-480x339.jpg',
    'https://woodmart.b-cdn.net/wp-content/uploads/2018/10/black-electronics-gallary-7-opt-480x339.jpg'
  ];

  const handleImageClick = (url) => {
    setModalImage(url);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage(null);
  };

  const { t } = useTranslation();

  return (
    <div className="images">
      <div className="imgSection-texts">
        <h1 data-aos="fade-up">{t('ImagesSection.0')}</h1> 
        <h3 data-aos="fade-up" data-aos-delay="200">{t('ImagesSection.1')}</h3> 
        <p data-aos="fade-up" data-aos-delay="400">
          {t('ImagesSection.2')}<br />
          {t('ImagesSection.3')}
        </p>
      </div>
      <div className="images-sec">
        <div className="row">
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-4 col-sm-6 img-sec"
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
              onClick={() => handleImageClick(url)}
            >
              <div className="img1">
                <img src={url} alt={`Image ${index + 1}`} className="thumbnail-image" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImage} alt="Modal Content" className="modal-image" />
          </div>
        </div>
      )}

      <style jsx>{`
        .thumbnail-image {
          width: 100%;
          height: auto;
          cursor: pointer;
          transition: none; /* Hover efekti kaldırıldı */
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .modal-image {
          max-width: 400vw;
          max-height: 400vh;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
};

export default ImagesSection;
