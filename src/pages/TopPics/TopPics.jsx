import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import SingleCard from '../../components/SingleCard/SingleCard';

const TopPics = () => {
    const data = useSelector(p => p);

    const { t } = useTranslation();
    
    return (
        <>
           <div className="pro-shopThing">
           <Container>
            <div className="product-text">
            <h3>{t('Products.0')}</h3>
                    <h1 id='product-text-h1'>{t('Products.1')}</h1>
                    <p>{t('Products.2')}<br />
                        {t('Products.3')}</p>
            </div>
                <Row className='g-5' id="visual-box">
                    {data.length == 0 ? <p id='box-v' className='alert alert-warning text-center'>No products</p> : data.slice(0, 4).map(i => (
                        <SingleCard alldata={i} key={i.id} />
                    ))}

                </Row>
            </Container>
           </div>
        </>
    )
}

export default TopPics
