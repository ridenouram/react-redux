import { getAllPosts, getPost } from './postSelectors';

describe('post selectors', () => {
  it('gets all posts', () => {
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

    expect(getAllPosts(state)).toEqual(
      [{ body: 'why does it shake', id: '555', title: 'hi there' }, 
        { body: 'the body the body', id: '666', title: 'hola' }, 
        { body: 'why does it move', id: '777', title: 'merhaba' }]
    );
  });

  it('gets a post by ID', () => {
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

    expect(getPost(state, '666')).toEqual({
      id: '666',
      title: 'hola',
      body: 'the body the body'
    });
  });
});
