import { createComment, CREATE_COMMENT } from "./commentAction";

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
}); 
