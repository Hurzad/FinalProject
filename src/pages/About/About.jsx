import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import { useTranslation } from 'react-i18next';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
        });
    }, []);

    const { t } = useTranslation();

    return (
        <div className="about-us">
            <div className="about-head-img" data-aos="fade-up">
                <img
                    src="https://www.asus.com/WebsitesBanner/TR/banners/hxedlrdgfqupnda7/hxedlrdgfqupnda7-0_0_desktop_1X.jpg?webp"
                    alt=""
                    className="background-img"
                />
                <h1>ASUS ROG <br />{t('About.0')}</h1>
            </div>

            <div className="container mt-5">
                <div className="about-data">
                    <div className="data-part1" data-aos="fade-up">
                        <h1>{t('About.1')}</h1>
                        <h2>{t('About.2')}</h2>
                        <p>{t('About.3')}<br />
                          {t('About.4')}<br />
                          {t('About.5')}</p>
                        <img src="https://dlcdnimgs.asus.com/websites/global/productcustomizedTab/5387/v2/history/images/large/1x/story/1/1.jpg" alt="" data-aos="zoom-in" />

                        <p>{t('About.6')}<br />
                          {t('About.7')}<br />
                          {t('About.8')}<br />
                          {t('About.9')}</p>
                        <img src="https://dlcdnimgs.asus.com/websites/global/productcustomizedTab/5387/v2/history/images/large/1x/story/1/2.jpg" alt="" data-aos="zoom-in" />
                        <h6 data-aos="fade-up">{t('About.10')}</h6>
                        <img width={600} src="https://www.asus.com/websites/global/productcustomizedTab/5387/v2/history/images/large/1x/story/5/4.jpg" alt="" data-aos="zoom-in" />
                    </div>

                    <div className="data-part2" data-aos="fade-up">
                        <p>{t('About.11')}<br />
                          {t('About.12')}<br />
                          {t('About.13')}<br />
                          {t('About.14')}<br />
                          {t('About.15')}</p>
                        <h1>{t('About.16')}</h1>

                        <p>{t('About.17')}<br />
                          {t('About.18')}<br />
                          {t('About.19')}<br />
                          {t('About.20')}<br />
                          {t('About.21')}<br />
                          {t('About.22')}<br />
                          {t('About.23')}<br />
                          {t('About.24')}</p>
                        <img width={600} src="https://www.asus.com/websites/global/productcustomizedTab/5387/v2/history/images/large/1x/story/5/3.jpg" alt="" data-aos="zoom-in" />
                        <p>{t('About.25')}</p>
                        <h2>{t('About.26')}</h2>
                        <p>{t('About.27')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

























































































































// import React, { useEffect } from 'react';
// import 'aos/dist/aos.css'; 
// import AOS from 'aos';
// import { useTranslation } from 'react-i18next';

// const About = () => {
//     useEffect(() => {
//         AOS.init({
//             duration: 1000, 
//         });
//     }, []);

//     const { t } = useTranslation();

//     return (
//         <div className="about-us">
//             <div className="about-head-img" data-aos="fade-up">
//                 <img
//                     src="https://www.asus.com/WebsitesBanner/TR/banners/hxedlrdgfqupnda7/hxedlrdgfqupnda7-0_0_desktop_1X.jpg?webp"
//                     alt=""
//                     className="background-img"
//                 />
//                 <h1>ASUS ROG <br />{t('About.0')}</h1>
//             </div>

//             <div className="container mt-5">
//                 <div className="about-data">
//                     <div className="data-part1" data-aos="fade-up">
//                         <h1>Our Story{t('About.1')}</h1>
//                         <h2>The story begins …{t('About.2')}</h2>
//                         <p>The idea for the company that would eventually become ASUS began {t('About.3')}<br />
//                           as a conversation in a coffee shop in Taipei, where a few ambitious {t('About.4')}<br />
//                           engineers shared a dream of creating a “small and beautiful company.”{t('About.5')}</p>
//                         <img src="https://dlcdnimgs.asus.com/websites/global/productcustomizedTab/5387/v2/history/images/large/1x/story/1/1.jpg" alt="" data-aos="zoom-in" />

//                         <p>Within eight months, these engineers had created the Cache 386/33 and {t('About.6')}<br />
//                           ISA 486/25 — two personal computer motherboards used in industry-leading products {t('About.7')}<br />
//                           built by IBM and ALR. With the success of these early motherboards, Taiwan became {t('About.8')}<br />
//                           known globally as a hub for high-quality IT products.{t('About.9')}</p>
//                         <img src="https://dlcdnimgs.asus.com/websites/global/productcustomizedTab/5387/v2/history/images/large/1x/story/1/2.jpg" alt="" data-aos="zoom-in" />
//                         <h6 data-aos="fade-up">The independently developed ASUS ISA-486 is praised by Intel, marking the beginning of a long-lasting partnership between ASUS and Intel.{t('About.10')}</h6>
//                         <img width={600} src="https://www.asus.com/websites/global/productcustomizedTab/5387/v2/history/images/large/1x/story/5/4.jpg" alt="" data-aos="zoom-in" />
//                     </div>

//                     <div className="data-part2" data-aos="fade-up">
//                         <p>Established in 1989, ASUS is a multinational company known for {t('About.11')}<br />
//                           the world’s best motherboards and high-quality personal computers, {t('About.12')}<br />
//                           monitors, graphics cards, routers and other technology solutions. Today, {t('About.13')}<br />
//                           ASUS is designing and building next-generation smart technologies to provide {t('About.14')}<br />
//                           incredible experiences that enhance the lives of people everywhere.{t('About.15')}</p>
//                         <h1>Celebrating milestones … & boldly looking to the future{t('About.16')}</h1>

//                         <p>As the second decade of the 21st century came to a close, {t('About.17')}<br />
//                           ASUS celebrated 30 years of historic innovation and excellence {t('About.18')}<br />
//                           with a series of events and product releases. In a special anniversary-year {t('About.19')}<br />
//                           highlight event held during Computex 2019, Chairman Jonney Shih introduced {t('About.20')}<br />
//                           a limited-edition series of devices to commemorate 30 years in business: {t('About.21')}<br />
//                           ZenFone 6 Edition 30, Zenbook Edition 30, Prime X299 Edition 30. The event {t('About.22')}<br />
//                           also included a preview of the Prime Utopia concept motherboard, featuring a {t('About.23')}<br />
//                           bold new design that once again affirmed ASUS as the No.1 motherboard maker in the world.{t('About.24')}</p>
//                         <img width={600} src="https://www.asus.com/websites/global/productcustomizedTab/5387/v2/history/images/large/1x/story/5/3.jpg" alt="" data-aos="zoom-in" />
//                         <p>As the second decade of the 21st century came to a close, ASUS celebrated 30 years of
//                           historic innovation and excellence with a series of events and product releases. In a
//                           special anniversary-year highlight event held during Computex 2019, Chairman Jonney
//                           Shih introduced a limited-edition series of devices to commemorate 30 years in business:
//                           ZenFone 6 Edition 30, Zenbook Edition 30, Prime X299 Edition 30. The event also included
//                           a preview of the Prime Utopia concept motherboard, featuring a bold new design that once
//                           again affirmed ASUS as the No.1 motherboard maker in the world.{t('About.25')}</p>
//                         <h2>A proud tradition of creating innovative technologies for everyone {t('About.26')}</h2>
//                         <p>Moving into the second decade of the 21st century, ASUS management recognized that there was an opportunity to positively impact local and global communities through efforts related to sustainability.{t('About.27')}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default About;
