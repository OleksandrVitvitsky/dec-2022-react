import React from 'react';

const PostDetail = ({value}) => {
    return (
        <div>
            {
                <p>

                    postId: {value.id}
                    userId: {value.userId}
                    title: {value.title}
                    body: {value.body}

        </p>
}
</div>
)
};

export default PostDetail;