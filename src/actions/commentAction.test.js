import { createComment, CREATE_COMMENT, deleteComment, DELETE_COMMENT } from "./commentAction";

describe('comment actions', () => {
  it('creates a comment', () => {
    expect (createComment('666', 'ABD', 'heres my comment')).toEqual({
      type: CREATE_COMMENT,
      payload: {
        postId: '666',
        commentId: 'ABD',
        commentBody: 'heres my comment'
      }
    });
  });

  it('deletes a comment', () => {
    expect(deleteComment('666', 'ABD')).toEqual({
      type: DELETE_COMMENT,
      payload: {
        postId: '666',
        commentId: 'ABD'
      }
    });
  });
}); 
