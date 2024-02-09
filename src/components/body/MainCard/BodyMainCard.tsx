import React from 'react';
import './BodyMainCard.css'
import ButtonsLikeOrDislike from '../../UI/ButtonsLikeOrDislike';
import ButtonReadNext from '../../UI/ButtonReadNext';

const BodyMainCard: React.FC = () => {
    return (
        <div className='ContainerBodyMainCard'>
            <div className='ContainerBodyTitle'>
                <p className='CardTitle'>Что нужно знать об эффективной интернет-рекламе?</p>
                <ButtonsLikeOrDislike/>
            </div>
            <div>
                <p>Интернет - огромный ресурс, позволяющий продвигать свои услуги практически на любую аудиторию. Ежедневно в сеть выходит более 5 миллиардов людей - каждый из них может увидеть вашу рекламу и стать вашим потенциальным клиентом. Рассказываем, как правильно настраивать рекламу в интернете.</p>
            </div>
            <div className='btn'>
                <ButtonReadNext/>
            </div>
        </div>
    );
};

export default BodyMainCard;