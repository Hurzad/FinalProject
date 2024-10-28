import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Footer = () => {

  const { t } = useTranslation();


  return (
    <div className="footer">
      <div className="container">
        <div className="end pt-3">
          <div className="foot-sec-One">
            <div className="secOne-part1">
              <h1 id='foot-logo-h'>WOODMART</h1>
              <img id='core-img' width={300} src="	https://woodmart.xtemos.com/wp-content/uploads/2018/08/wood-logo-dark.svg" alt="" />
              <p className='pt-2'>{t('Footer.0')}<br />
                {t('Footer.1')}<br />
                {t('Footer.2')}</p>
              <h6><img src="https://woodmart.xtemos.com/wp-content/uploads/2023/09/wd-cursor-dark.svg" alt="" />{t('Footer.3')}</h6>
              <h6><img src="https://woodmart.xtemos.com/wp-content/uploads/2023/09/wd-phone-dark.svg" alt="" />{t('Footer.4')}</h6>
              <h6><img src="https://woodmart.xtemos.com/wp-content/uploads/2023/09/wd-envelope-dark.svg" alt="" />{t('Footer.5')}</h6>
            </div>


            <div className="secOne-part2">
              <h4>{t('Footer.6')}</h4>

              <Link to="https://www.wayfair.com/">
              <div className="post-1">
                <img src="https://woodmart.b-cdn.net/wp-content/uploads/2016/07/blog-12-75x65.jpg" alt="" />
                <div className="post1-text">
                  <h5>{t('Footer.7')}<br />
                    {t('Footer.8')}</h5>
                  <h6>{t('Footer.9')}</h6>
                </div>
              </div>
              </Link>

            <Link to="https://www.wayfair.com/">
            <div className="post-2 pt-4">
                <img src="https://woodmart.b-cdn.net/wp-content/uploads/2016/07/blog-11-75x65.jpg" alt="" />
                <div className="post2-text">
                  <h5>{t('Footer.10')}<br />
                    {t('Footer.11')}</h5>
                  <h6>{t('Footer.12')}</h6>
                </div>
              </div>
            </Link>


            </div>
          </div>



            <div className="foot-line2">
              <h3>{t('Footer.13')}</h3>
              <ul>
                <NavLink to="/"><li>{t('Footer.14')}</li></NavLink>
                <NavLink to="/contact"><li>{t('Footer.15')}</li></NavLink>
                <NavLink to="/faq"><li>{t('Footer.16')}</li></NavLink>
                <NavLink to="/add"><li>{t('Footer.17')}</li></NavLink>
                <NavLink to="/login"><li>{t('Footer.18')}</li></NavLink>
                <NavLink to="/about"><li>{t('Footer.19')}</li></NavLink>
              </ul>
            </div>

            <div className="foot-sec-Two">
            <div className="foot-line1">
              <h3>{t('Footer.20')}</h3>
              <ul>
                <li><Link to="https://www.link.nyc/find-a-link.html">New York</Link></li>
                <li><Link to="https://www.link.nyc/find-a-link.html">London SF</Link></li>
                <li><Link to="https://www.link.nyc/find-a-link.html">Edinburgh</Link></li>
                <li><Link to="https://www.link.nyc/find-a-link.html">Los Angeles</Link></li>
              </ul>
            </div>
            <div className="foot-line3"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
