import React from 'react';
import Navbar from '../Componets/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Componets/Footer/Footer';


const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;