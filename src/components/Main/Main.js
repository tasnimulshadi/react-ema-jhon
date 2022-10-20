import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {

    return (
        <div>
            <nav className='navigation'>
                <div className='container height100'>
                    <Header />
                </div>
            </nav>
            <div className='container'>
                <Outlet />
            </div>
        </div>
    );
};

export default Main;