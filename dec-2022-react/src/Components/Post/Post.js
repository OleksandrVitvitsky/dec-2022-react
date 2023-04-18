import React from 'react';

const Post = (value, lift) => {

    return (
        <div>
            {
                <p>
                    post id: {value.id} <br/>

                    title: {value.title} <br/>

                    <button onClick={() => {
                        lift(value);
                    }}>read more
                    </button>

                </p>
            }
        </div>
    );
};

export default Post;