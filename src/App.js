import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from './components/pages/ContactUs';
import Home from './components/pages/Home';
import FAQ from './components/pages/FAQ';
import Forms from './components/pages/Forms';
import MarketPrd from './components/pages/MarketPrd';
import Nav from './components/supporting/general/Navbar';
import Footer from './components/supporting/general/Footer';
import ErrorPage from './components/pages/ErrorPage';

export default function App(){
    return(
        <Router>
            <>
                <Nav/>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/Contact" element={<ContactUs/>} />
                    <Route exact path="/faq" element={<FAQ/>} />
                    <Route exact path="/products" element={<MarketPrd/>} />
                    <Route exact path="/Forms" element={<Forms/>} />
                    <Route path='*' element={<ErrorPage/>} />
                </Routes>
                <Footer/>
            </>
        </Router>
    )
}
