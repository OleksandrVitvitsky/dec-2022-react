import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";
import PostDetail from "../PostDetail/PostDetail";
import "./Posts.css";
const Posts = () => {

    let [onClickPost, setOnClickPost] = useState(null);
    const lifting = (obj) => {
        setOnClickPost({...obj});
    }

    let [posts, setPosts ] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(allPosts => {
                setPosts(allPosts);
                console.log(allPosts);
            });
    }, []);



    return (
        <div className={'mainContainer'}>
            <div className={'posts'}>
                {
                    posts.map(value =>
                        <Post
                            value={value}
                            lift={lifting}
                            key={value.id}/>
                    )
                }
            </div>
            {
                onClickPost
                &&
                (
                    <div className="detailPost">
                        <PostDetail value={onClickPost}/>
                    </div>
                )


            }
        </div>
    );
};

export default Posts;