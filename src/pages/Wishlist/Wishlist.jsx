import React from 'react'
import { useWishlist } from 'react-use-wishlist'
import SingleCard from '../../components/SingleCard/SingleCard'
import { Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';

const Wishlist = () => {
  const { items } = useWishlist()
  console.log(items, 'adadd');

  const { t } = useTranslation();

  return (
    <div className='wishlist-back'>
      <h1 className='text-center'>{t('Wishlist.0')}</h1>
      <div className="container">
      <div id='wue' className='col-12 col-sm-12 col-md-12'>
        <Row id='wish-product'>
          {items?.map(item => {
            return <SingleCard alldata={item} />
          })}
        </Row>

      </div>
      </div>
    </div>
  )
}

export default Wishlist











