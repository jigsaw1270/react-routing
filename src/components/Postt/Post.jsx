import React from 'react';
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
import Posts from '../posts/Posts';

const Post = () => {
    
    
const posts = useLoaderData();
    
    return (
        <div>
            <h1>all posts</h1>
            <div>
                {
                    posts.map(post => <Posts key ={post.id} posts={posts}></Posts>)
                }
            </div>
        </div>
    );
};

export default Post;