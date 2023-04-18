import React from 'react';
import './post.css';

const Post = ({value, lift}) => {

    return (
        <div className={'post'}>
            <div> post id: {value.id}</div>
             <div> title: {value.title} </div>
              <button onClick={() => {lift(value)}}>read more </button>
        </div>
    );
};

export default Post;