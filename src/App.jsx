import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Shop/Products';
import AddProduct from './pages/dashboard/AddProduct';
import Dashboard from './pages/dashboard/Dashboard';
import EditProduct from './pages/dashboard/EditProduct';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Contact from './pages/Contact/Contact';
import Account from './pages/account/Account';
import Footer from './layout/Footer';
import Header from './layout/Header'; 
import Basket from './pages/Basket/Basket';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FAQ from './pages/FAQ/FAQ';
import About from './pages/About/About';
import Wishlist from './pages/Wishlist/Wishlist';
import CheckOut from './pages/CheckOut/CheckOut';
import SuccsessPayment from './pages/SuccesPayment/SuccessPayment';
import ProductDetails from './pages/Detail/ProductDetails';
import { ModeContext } from './context/ModeContext';
import Admin from './pages/Admin';
import TopPics from './pages/TopPics/TopPics';

const Main = () => {
  const [mode] = useContext(ModeContext);
  return (
    <div className={mode}>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <Header/>
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/add' element={<Products />} />
        <Route path='/add/:id' element={<ProductDetails />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/add' element={<AddProduct />} />
        <Route path='/dashboard/edit/:slug' element={<EditProduct />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/account' element={<Account />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/about' element={<About />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/successpayment' element={<SuccsessPayment />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/toppic' element={<TopPics />} />
      </Routes>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
};

export default App;
