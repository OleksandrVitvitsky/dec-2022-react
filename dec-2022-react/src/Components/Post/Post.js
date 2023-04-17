import React from 'react';

const Post = (value, lift) => {

    return (
        <div>
            {
                <pre>
                    post id: {value.id}
                    {/*userId: {value.userId}*/}
                    title: {value.title}
                    {/*body: {value.body}*/}
                    <button onClick={() => {
                        lift(value);
                    }}>read more
                    </button>

                </pre>
            }
        </div>
    );
};

export default Post;