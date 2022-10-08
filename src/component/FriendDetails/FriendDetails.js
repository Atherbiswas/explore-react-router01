import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    const {name, phone, website, email} = friend;
    return (
        <div>
            <h1>Friend Details</h1>
            <h4>Name: {name}</h4>
            <h5>Phone: {phone}</h5>
            <h6>Email: {email}</h6>
            <h6>Website: {website}</h6>
        </div>
    );
};

export default FriendDetails;