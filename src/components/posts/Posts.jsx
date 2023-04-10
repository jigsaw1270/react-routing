import React from 'react';

const Posts = ({posts}) => {
    
    
    const {id, body,title} = posts;
    console.log(posts);
    return (
        <div>
        <h5>{id}</h5>
            <h5>{body}</h5>
            <p>{title}</p>
            
        </div>
    );
};

export default Posts;