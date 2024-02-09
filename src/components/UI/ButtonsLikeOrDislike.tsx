import React, { useState } from 'react';
import './ButtonsLikeOrDislike.css'
import Dislike from '../../img/Dislike.png'
import Like from '../../img/Like.png'


interface ButtonsLikeOrDislikeProps {}


const ButtonsLikeOrDislike: React.FC<ButtonsLikeOrDislikeProps> = () => {
    const [likeCount, setLikeCount] = useState<number>(Math.floor(Math.random() * 51));
    const [dislikeCount, setDislikeCount] = useState<number>(Math.floor(Math.random() * 51));

    const handleLikeClickLike: React.MouseEventHandler<HTMLButtonElement> = () => {
        setLikeCount(likeCount + 1);
    };
    const handleLikeClickDislike: React.MouseEventHandler<HTMLButtonElement> = () => {
        setDislikeCount(dislikeCount + 1);
    };

    return (
        <div className='ContainerBtnLikeAndDislike'>
            <button className='BtnLikeAndDislike' onClick={handleLikeClickLike}>
                <div className='containerCount'>
                    <img className='StyleImgLikeAndDislike' src={Like} alt="" />
                    <p>{likeCount}</p>
                </div>
            </button>
            <button className='BtnLikeAndDislike' onClick={handleLikeClickDislike}>
                <div className='containerCount'>
                    <img className='StyleImgLikeAndDislike' src={Dislike} alt="" />
                    <p>{dislikeCount}</p>
                </div>
            </button>
        </div>
    );
};

export default ButtonsLikeOrDislike;
