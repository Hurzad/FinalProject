import React from 'react'
import { Button, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteProduct } from '../../tools/actions/shopAction';
import slugify from 'slugify';
import { supabase } from '../../supabase/supabaseClient';
import swal from 'sweetalert';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
    const data = useSelector(p => p);
    const dispatch = useDispatch();
    const { t } = useTranslation();

    return (
        <div id='dashboard-page' className="dashboard">
            <Container>
            <div className="d-flex align-items-center justify-content-center flex-column">
                <h1 className='text-center'>{t('Dashboard.0')}</h1>
                <div style={{ width: "75%" }}>
                    <Link to="/dashboard/add" className='btn btn-success my-3'>{t('Dashboard.1')}</Link>
                </div>
                <Col sm={9}>
                    <table className="table-dash">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">{t('Dashboard.2')}</th>
                                <th scope="col">{t('Dashboard.3')}</th>
                                <th scope="col">{t('Dashboard.4')}</th>
                                <th scope="col">{t('Dashboard.5')}</th>
                                <th scope="col">{t('Dashboard.6')}</th>
                                <th scope="col">{t('Dashboard.7')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, count) => (
                                <tr>
                                    <th scope="row">{count + 1}</th>
                                    <td><img src={item.photo} width={70} alt="" /></td>
                                    <td>{item.title}</td>
                                    <td>{item.desc.slice(0, 15)}...</td>
                                    <td>{item.price}</td>
                                    <td><Link to={`/dashboard/edit/${slugify(item.title)}`} className='btn btn-warning'>{t('Dashboard.8')}</Link></td>
                                    <td><Button variant='danger' onClick={async () => {
                                        const { data, error } = await supabase.from('products').delete().eq('id', item.id);
                                        if (error) {
                                            console.log(error);
                                        } else {
                                            swal('product was deleted!', "", "success");
                                            setTimeout(() => {
                                                window.location.assign('/dashboard')
                                            }, 1500)
                                        }
                                    }}>{t('Dashboard.9')}</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Col>
            </div>
        </Container>
        </div>

    )
}

export default Dashboard
