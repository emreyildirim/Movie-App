import React from 'react';
import Navbar from '../components/Navbar';
import Favorites from '../components/Favorites';

const favorites = () => {
    return (
        <div >
            <Navbar />
            <div className="container">
                <div className="d-flex flex-row flex-wrap justify-content-center ">
                    <Favorites />
                </div>
            </div>
         </div>
    );
};

export default favorites;
