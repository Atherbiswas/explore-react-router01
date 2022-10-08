import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id,title,body} = post;
    return (
        <div>
            <h3>Here we can see post details of: {id}</h3>
            <h5>Title: {title}</h5>
            <h6>{body}</h6>
        </div>
    );
};

export default PostDetails;