import './Routetable.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Component/About';
import RegistrationForm from './Component/Authentication/Registration';
import ContactUs from './Component/ContactUs';
import FAQ from './Component/FAQ';
import Footer from './Component/Footer';
import Home from './Component/Home';
import HomeNavbar from './Component/HomeNavbar';
import Login from './Component/Login';
import Payment from './Component/Payment';
import ProductDetails from './Component/Product_Details';
import Products from './Component/Products';
import OrderReturnCancellation from './Component/Return';
import Search from './Component/Search';
import CartPage from './Component/Shop';
import SubCategory from './Component/Subcategory';
import TopOffers from './Component/Topoffers';


function Routetable() {
    return (
    <>
        <HomeNavbar />
        <BrowserRouter>
        <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/register" element={<RegistrationForm/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/productsByCat/:code" element={<Products />} />
            <Route path="/products/:code" element={<Products />} />
            <Route path="/search/:code" element={<Search />} />
            <Route path="/subcategories/:code" element={<SubCategory />} />
            <Route path="/productdetails/:code" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/return" element={<OrderReturnCancellation />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/topoffers" element={<TopOffers />} />

            {/* <Route path="/linkdata" element={<Linkdata />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/updateselected/:url/:code" element={<UpdateSelected />} />
            <Route path="/deleteselected/:url/:code" element={<DeleteSelected />} />
            <Route path="/displayselected/:url/:code" element={<DisplaySelected />} /> */}
        </Routes>
        </div>
        <Footer/>
        </BrowserRouter>
    </>
    );
}

export default Routetable;
