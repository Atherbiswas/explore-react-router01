import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../post/Post';

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
            <h2>Here you can see post</h2>
            {
                posts.map(post => <Post
                key = {post.id}
                post = {post}
                ></Post>)
            }
        </div>
    );
};

export default Posts;