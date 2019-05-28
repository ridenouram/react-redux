//get all posts
export const getAllPosts = state => {
  const postIds = Object.keys(state.posts);
  const allPosts = postIds.map(postId => { 
    return { id: postId, title: state.posts[postId].title, body: state.posts[postId].body }
  });
  return allPosts;
};

//get a post by index
export const getPost = (state, postId) => {
  return { id: postId, title: state.posts[postId].title, body: state.posts[postId].body };
};

