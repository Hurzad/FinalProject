import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleCard from '../../components/SingleCard/SingleCard';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Products = () => {
    const data = useSelector(p => p);
    const [sortData, setSortData] = useState(data);
    const [sortOrder, setSortOrder] = useState('asc');

    const handleSort = (order, criteria) => {
        setSortOrder(order);

        const sorted = [...sortData].sort((a, b) => {
            if (criteria === 'title') {
                const titleA = a.title.toUpperCase();
                const titleB = b.title.toUpperCase();

                return order === 'asc' 
                    ? (titleA < titleB ? -1 : titleA > titleB ? 1 : 0)
                    : (titleA > titleB ? -1 : titleA < titleB ? 1 : 0);
            } else if (criteria === 'price') {
                return order === 'asc' 
                    ? a.price - b.price 
                    : b.price - a.price;
            }
            return 0;
        });

        setSortData(sorted);
    };

    const handleFilter = (category) => {
        if (category === 'all') {
            setSortData(data);
        } else {
            const filtered = data.filter(item => item.title.toUpperCase().includes(category.toUpperCase()));
            setSortData(filtered);
        }
    };

    const { t } = useTranslation();

    return (
        <div className="pro-shopThing">
            <Container>
                <div className="product-text">
                    <h3>{t('Products.0')}</h3>
                    <h1>{t('Products.1')}</h1>
                    <p>{t('Products.2')}<br />
                        {t('Products.3')}</p>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-1 filter">
                        <ul className="list-group">
                            <li className="list-group-item" onClick={() => handleSort('asc', 'title')}>A-Z</li>
                            <li className="list-group-item" onClick={() => handleSort('desc', 'title')}>Z-A</li>
                            <li className="list-group-item" onClick={() => handleSort('asc', 'price')}>Lowest First</li>
                            <li className="list-group-item" onClick={() => handleSort('desc', 'price')}>Highest First</li>
                            <li className="list-group-item" onClick={() => handleFilter('all')}>{t('Products.4')}</li>
                        </ul>
                    </div>

                    <div className="col-12 col-sm-12 col-md-11">
                        <Row className='g-5'>
                            {sortData.length === 0 ?
                                <p className='alert alert-warning text-center'>No products</p> :
                                sortData.map(i => (
                                    <SingleCard alldata={i} key={i.id} />
                                ))}
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Products;






// import React, { useState } from 'react'
// import { Container, Row } from 'react-bootstrap'
// import SingleCard from '../../components/SingleCard/SingleCard'
// import { useSelector } from 'react-redux'

// const Products = () => {
//     // bir store daxilinde bir nece reducer cagirmaq olur o zaman combinereducer istifade olunur amma burada ehtiyac yoxdur deye p=>p olar
//     const data = useSelector(p => p);
//     const [filterData,setFilterData] = useState(data);
//     const filterResult = (catitem)=>{
//         const result = data.filter(i=>i.title === catitem);
//         setFilterData(result);
//     }
//     return (
//         <Container>
//             <h1 className='text-center my-5'>Products</h1>
//             <div className="row">
//                 <div className="col-12 col-sm-12 col-md-2">
//                     <ul className="list-group">
//                         <li className="list-group-item">A-Z</li>
//                         <li className="list-group-item">Z-A</li>
//                         <li className="list-group-item" onClick={()=>{filterResult("Hardware")}}>Hardware</li>
//                         <li className="list-group-item">ROG</li>
//                     </ul>

//                 </div>


//                 <div className="col-12 col-sm-12 col-md-10">
//                     <Row className='g-5'>
//                         {filterData.length == 0 ? <p className='alert alert-warning text-center'>No products</p> : data.map(i => (
//                             <SingleCard alldata={i} key={i.id} />
//                         ))}

//                     </Row>
//                 </div>
//             </div>
//         </Container>
//     )
// }

// export default Products

