import React from 'react';
import './Header.css'

const Header: React.FC = () => {
    return (
        <div className='HeaderContainer'>
            <h1>Блог</h1>
            <p>Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим <br/> зарубежные статьи</p>
        </div>
    );
};

export default Header;