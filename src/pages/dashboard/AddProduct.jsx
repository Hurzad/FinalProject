import React from 'react'
import ProductForm from '../../components/ProductForm'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../tools/actions/shopAction';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase/supabaseClient';
import { useTranslation } from 'react-i18next';

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className='addPro-page'>
      <h1 className='text-center'>{t('AddPro.0')}</h1>
      {/* burada ise data lari cekmek ucun fd den istifade olunub sertidir/ve fd ile addProduct a dispatch etmek ucun istifade etdik */}
      <ProductForm onFormSubmit={async(fd)=>{
       const {data,error} = await supabase.from('products').insert(fd)
       if (error) {
        console.log(error);
       }else{
        swal("Product add successfully","","success");
        setTimeout(()=>{
           window.location.assign('/dashboard');
        },1500)
       }
       
      }} />
    </div>
  )
}

export default AddProduct
