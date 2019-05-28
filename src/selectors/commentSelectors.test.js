import { getCommentByPost, getCommentsByPost } from "./commentSelectors";

describe('comment selectors', () => {
  it('gets comments by post', () => {
    const state = {
      posts: {
        '555': {
          title: 'hi there',
          body: 'why does it shake'
        },
        '666': {
          title: 'hola',
          body: 'the body the body'
        },
        '777': {
          title: 'merhaba',
          body: 'why does it move'
        }
      },
      comments: {
        '555': {
          'AAA': {
            body: 'the fear'
          },
          'BBB': {
            body: 'great song'
          }
        },
        '666': {
          'CCC': {
            body: 'yes wow'
          }
        }
      }
    };

    expect(getCommentsByPost(state, '555')).toEqual({
      'AAA': {
        body: 'the fear'
      },
      'BBB': {
        body: 'great song'
      }
    });
  });
});
