import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import SingleCard from '../../../components/SingleCard/SingleCard';
import { useTranslation } from 'react-i18next';

const CompSec = () => {
    const data = useSelector(p => p);

    const { t } = useTranslation();

    return (
        <>
            <div className="pro-shopThing">
                <Container>
                    <div className="product-text">
                        <h3>{t('Products.0')}</h3>
                        <h1>{t('Products.1')}</h1>
                        <p>{t('Products.2')}<br />
                            {t('Products.3')}</p>
                    </div>
                    <Row className='g-5'>
                        {data.length == 0 ? <p className='alert alert-warning text-center'>No products</p> : data.slice(1, 5).map(i => (
                            <SingleCard alldata={i} key={i.id} />
                        ))}

                    </Row>
                </Container>
            </div>
        </>
    )
}

export default CompSec
