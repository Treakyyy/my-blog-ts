import React from 'react';
import MainCardImg from '../../UI/MainCardImg';
import BodyMainCard from './BodyMainCard';
import './MainCard.css'

const MainCard: React.FC = () => {
    return (
        <div className='ContainerMainCard'>
            <MainCardImg/>
            <BodyMainCard/>
        </div>
    );
};

export default MainCard;