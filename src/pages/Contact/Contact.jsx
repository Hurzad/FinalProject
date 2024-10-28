import React, { useRef, useEffect } from 'react';
import swal from 'sweetalert';
import emailjs from '@emailjs/browser';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_101rd65', 'template_b1n4a53', form.current, {
                publicKey: 'Kf94oBMClhRLkN0ie',
            })
            .then(
                () => {
                    swal("Message successfully sended!", "", "success");
                },
                (error) => {
                    swal("Something is wrong", "", "error");
                },
            );
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const { t } = useTranslation();

    return (
        <div className='contact-page'>
            <div className="div-img">
                <img width={1685} src="https://www.amd.com/content/dam/amd/en/images/backgrounds/lifestyle/2034503-rog-ally-banner.jpg" alt="" />
            </div>
            {/* <h1 className='text-center contact-us' data-aos="fade-up">{t('ContactUs.0')}</h1> */}
            <h2 className='text-center purple-name' data-aos="fade-up">{t('ContactUs.1')}<br />{t('ContactUs.2')}</h2>
            <span className='name-2' data-aos="fade-up">{t('ContactUs.3')}</span>
            <div className="d-flex align-items-center justify-content-center my-5 core-contact">
                <div className="col-4 contact-img" data-aos="fade-right">
                    <img className='contact-img1' width={400} src="https://img.lovepik.com/bg/20240426/3D-Render-of-Computer-Website-with-Data-Analysis-Background_7269063_wh860.jpg!/fw/860" alt="" />
                    <img className='contact-img2' width={350} src="https://img.freepik.com/free-photo/view-3d-computer-device-with-peripheral-devices_23-2150714059.jpg" alt="" />
                    <img className='contact-img3' width={300} src="https://png.pngtree.com/thumb_back/fh260/background/20230706/pngtree-3d-rendered-graphic-design-on-computer-image_3815260.jpg" alt="" />
                </div>
                <div className="col-4 form-contact" data-aos="fade-left">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-3">
                            <label className="form-label">{t('ContactUs.4')}</label>
                            <input type="text" name='name' className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">{t('ContactUs.5')}</label>
                            <input type="text" name='surname' className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">{t('ContactUs.6')}</label>
                            <input type="tel" name='phone' className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">{t('ContactUs.7')}</label>
                            <input type="email" name='email' className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">{t('ContactUs.8')}</label>
                            <div className="form-floating">
                                <textarea name='message' className="form-control" ></textarea>
                            </div>
                        </div>

                        <button type="submit">{t('ContactUs.9')}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
