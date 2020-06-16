import { FETCH_POSTS } from "../actions/PostActions"; 

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case FETCH_POSTS:
      return Object.assign({}, newState, action.posts) 
    default:
      return state; 
  }
}

export default postsReducer;