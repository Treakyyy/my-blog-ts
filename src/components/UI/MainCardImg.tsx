import React from 'react';
import mainCardImg from '../../img/mainCardImg.png';
import './MainCardImg.css'

const MainCard: React.FC = () => {
    return (
        <img className='MainCard' src={mainCardImg} alt="" />
    );
};

export default MainCard;