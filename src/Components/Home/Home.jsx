import React from 'react';
import Css from "./Home.module.css"
import { Outlet } from 'react-router-dom';
const Home = () => {
    return (
        <div className={Css.parent}>
           <Outlet></Outlet>
        </div>
    );
}

export default Home;
