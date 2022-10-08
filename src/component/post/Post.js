import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {id, title, body} = post;
    // handle clicker by using react hooks
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <h5>Title: {title}</h5>
            <p><small>{body}</small></p>
            {/* /// handle clicker by general system */}
            <Link to={`/post/${id}`}><button>Show Details1</button></Link>
            <button onClick={handleNavigate}>Show Details2</button>
        </div>
    );
};

export default Post;