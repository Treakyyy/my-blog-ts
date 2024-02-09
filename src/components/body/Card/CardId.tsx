import React, { useEffect, useState } from 'react';
import './CardId.css';
import { Link, useParams } from 'react-router-dom';
import ButtonsLikeOrDislike from '../../UI/ButtonsLikeOrDislike';
import Card_4 from '../../../img/Card_4.png';
import axios, { AxiosResponse } from 'axios';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface CardIdProps {}

const CardId: React.FC<CardIdProps> = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    async function fetchPosts() {
        try {
            const response: AxiosResponse<Post[]> = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const firstPost = response.data[0];
            setPost(firstPost || null);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }

    useEffect(() => {
        fetchPostById();
    }, [id]);

    async function fetchPostById() {
        try {
            const response: AxiosResponse<Post> = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            setPost(response.data);
        } catch (error) {
            console.error(`Error fetching post with id ${id}:`, error);
        }
    }

    return (
        <div>
            <div>
                <div className='containerButtonCardId'>
                    <Link to='/'>
                        <button className='buttonBack'>Вернуться к статьям</button>
                    </Link>
                    <ButtonsLikeOrDislike />
                </div>
                <div className='containerCardId'>
                    {post ? (
                        <>
                            <p className='CardTitle'>{post.title}</p>
                            <img className='CardImg' src={Card_4} alt='' />
                            <p className='CardIdBody'>{post.body}</p>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CardId;


