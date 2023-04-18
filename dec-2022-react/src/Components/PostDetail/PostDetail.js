import React from 'react';
import './postDetail.css'
const PostDetail = ({value}) => {
    return (
        <div id={'post-detail'}>
            <div> postId: {value.id}</div>
            <div> userId: {value.userId}</div>
            <div> title: {value.title}</div>
            <div> body: {value.body}</div>


        </div>
    )
};

export default PostDetail;