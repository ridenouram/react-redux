import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Post({ post, deletePost }) {
  return (
    <>
      <Link to={`/posts/${post.id}`}>
        {post.title}
      </Link>
      <button onClick={deletePost.bind(null, post.id)}>Delete</button>
    </>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
};

export default Post;
