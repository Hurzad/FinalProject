import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const SliderCarousel = () => {
  const settings = {
    dots: true,
    swipe: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  const { t } = useTranslation();

  const slidesTexts = [
    <div key={1} id='slideText1' className="slide-text">
      <h1>{t('slide.0')}</h1>
      <h2>{t('slide.1')}</h2>
      <p>{t('slide.2')}<br />{t('slide.3')}</p>
      <span>
        <button  className='btn-1-core' id='btn-slide1'><Link to="/add" >{t('slide.4')}</Link></button>
        $499.00
      </span>
    </div>,

    <div key={2} className="slide-text">
      <div className="slide-text2">
        <h1>{t('slide.5')}</h1>
        <h2>{t('slide.6')}</h2>
        <p>{t('slide.7')}<br />{t('slide.8')}</p>
        <span>
          <button id='btn-slide1'><Link to="/add">{t('slide.4')}</Link></button>
          $399.00
        </span>
      </div>
    </div>,

    <div key={3} id='slideText1' className="slide-text">
      <h1>{t('slide.9')}</h1>
      <h2>{t('slide.10')}</h2>
      <p>{t('slide.11')}<br />{t('slide.12')}</p>
      <span>
        <button id='btn-slide1'><Link to="/add">{t('slide.4')}</Link></button>
        $499.00
      </span>
    </div>
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div style={{ backgroundColor: '#eee', textAlign: 'center', height: '300px' }}>
          {slidesTexts[0]}
          <img src="https://woodmart.b-cdn.net/wp-content/uploads/2024/02/hardware-black-slide-1.jpg" alt="" />
        </div>

        <div style={{ backgroundColor: '#ccc', textAlign: 'center', height: '300px' }}>
          {slidesTexts[1]}
          <img src="https://woodmart.b-cdn.net/wp-content/uploads/2024/02/hardware-black-slide-2.jpg" alt="" />
        </div>

        <div style={{ backgroundColor: '#aaa', textAlign: 'center', height: '300px' }}>
          {slidesTexts[2]}
          <img src="https://woodmart.b-cdn.net/wp-content/uploads/2024/02/hardware-black-slide-3.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderCarousel;































































































































































// import React from 'react'
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Header from '../../../layout/Header';
// import { useTranslation } from 'react-i18next';
// import i18 from '../../../i18n/i18next';

// const SliderCarousel = () => {
//   const settings = {
//     dots: true,
//     swipe: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000
//   };


//   const { t } = useTranslation();


//   const slidesTexts = [
//     <div key={1} id='slideText1' className="slide-text">
//       <h1>ASUS Rog</h1>
//       <h2>MAXIMUS IX</h2>
//       <p>Intel Z270 ATX gaming motherboard with Aura Sync RGB LEDs, DDR4 4133MHz, <br />
//         dual M.2 , USB 3.1 front-panel connector and type - A/C</p>
//       <span>
//         <button id='btn-slide1'>SHOP NOW</button>
//         $499.00
//       </span>
//     </div>,

//     <div key={1} className="slide-text">
//      <div className="slide-text2">
//      <h1>Tensor Cores</h1>
//       <h2>NVIDIA TITAN V</h2>
//       <p>Many desktop publishing packages and web page editors now use lorem <br />
//        ipsum as their default model text, and a search for lorem ipsum.</p>
//        <span>
//         <button id='btn-slide1'>SHOP NOW</button>
//         $399.00
//       </span>
//      </div>
//     </div>,


//     <div key={2} id='slideText1' className="slide-text">
//       <h1>ATX Mid-Tower</h1>
//       <h2>NZXT H440 CASE</h2>
//       <p>Many desktop publishing packages and web page editors now use lorem <br /> ipsum as their default model text, and a search for lorem ipsum.</p>
//       <span>
//         <button id='btn-slide1'>SHOP NOW</button>
//         $499.00
//       </span>
//     </div>
//   ];

//   return (
//     <div className="slider-container">
//       <Header />
//       <Slider {...settings}>

//         <div style={{ backgroundColor: '#eee', textAlign: 'center', height: '300px', lineHeight: '300px' }}>
//           {slidesTexts[0]}
//           <img src="https://woodmart.b-cdn.net/wp-content/uploads/2024/02/hardware-black-slide-1.jpg" alt="" />
//         </div>

//         <div style={{ backgroundColor: '#ccc', textAlign: 'center', height: '300px', lineHeight: '300px' }}>
//           {slidesTexts[1]}
//           <img src="https://woodmart.b-cdn.net/wp-content/uploads/2024/02/hardware-black-slide-2.jpg" alt="" />
//         </div>

//         <div style={{ backgroundColor: '#aaa', textAlign: 'center', height: '300px', lineHeight: '300px' }}>
//           {slidesTexts[2]}
//           <img src="https://woodmart.b-cdn.net/wp-content/uploads/2024/02/hardware-black-slide-3.jpg" alt="" />
//         </div>
//       </Slider>
//     </div>
//   );
// };


// export default SliderCarousel

// // https://images.squarespace-cdn.com/content/v1/61d5b4126a2b1d3f32e26498/bcf333de-2840-4fd8-ad5c-95812e27d683/L4BK+BS+RGB+16x9.jpg
