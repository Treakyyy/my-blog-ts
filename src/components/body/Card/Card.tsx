import React, { useEffect, useState, ChangeEvent } from 'react';
import './Card.css';
import axios, { AxiosResponse } from 'axios';
import Card_4 from '../../../img/Card_4.png';
import ButtonReadNext from '../../UI/ButtonReadNext';
import ButtonsLikeOrDislike from '../../UI/ButtonsLikeOrDislike';
import { Link } from 'react-router-dom';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const Card: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');

    useEffect(() => {
        fetchPosts();
    }, []);

    async function fetchPosts() {
        try {
            const response: AxiosResponse<Post[]> = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const filteredPosts = posts.filter(post => {
        return post.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <div className='ConteinerCard'>
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder='Поиск по названию статьи'
            />
            <div className='ConteinerCardElement'>
                {filteredPosts.map((post) => 
                    <div key={post.id} className='ContainerSecondaryCards'>
                        <img className='CardImg' src={Card_4} alt="" />
                        <p className='CardTitle'>{post.title}</p>
                        <div className='ConteinerCardButton'>
                            <ButtonsLikeOrDislike />
                            <Link to={`/blog/${post.id}`}><ButtonReadNext /></Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
