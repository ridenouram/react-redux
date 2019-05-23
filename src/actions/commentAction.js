//create a comment (by post index)
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = (postId, commentId, commentBody) => ({
  type: CREATE_COMMENT,
  payload: {
    postId: postId,
    commentId: commentId,
    commentBody: commentBody
  }
});

//delete a comment (by post, comment index)


