import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Frienddetail = () => {
    const friend = useLoaderData();

    return (
        <div>
            <h2>My friend detail</h2>
            <h4>Name : {friend.name}</h4>
            <h4>Phone : {friend.phone}</h4>
        </div>
    );
};

export default Frienddetail;