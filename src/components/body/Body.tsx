import React from 'react';
import './Body.css'
import MainCard from './MainCard/MainCard';
import Card from './Card/Card';

const Body = () => {
    return (
        <div className='BodyContainer'>
            <MainCard/>
            <Card/>
        </div>
    );
};

export default Body;