// An action is a plain object that represents an intention to change the state.
// Actions are the only way to get data into the store (change the state). 
// Any data, whether from UI events, network callbacks, or other sources such as 
// WebSockets needs to eventually be dispatched as actions.

// Actions must have a type field that indicates the type of action being
// performed. Types can be defined as constants and imported from another module.
// It's better to use strings for type than Symbols because strings are serializable.


// These are action types. Action types inidicate to the reducer what kind of 
// is being performed 
export const FETCH_POSTS = "FETCH_POST"; 
export const NEW_POST = "NEW_POST"; 

// These are Thunk action creators. They are functions that return the dispatch 
// function from thunk middlewares. The dispatch funtions work like a resolver
// in a promise. Whenever we want to send data we call dispatch; just like if you
// are in a promis and you call resolve, then pass in the data. In our case we 
// will be passing in the payload to dispatch. Below is an example of a proper 
// Thunk action creator. 


// We call allPosts from the utils file which is a function that makes an AJAX call
// to the backend and returns a Promise. We then use thunk dispatch to dispatch the
// receiveAllPosts action and pass posts in as an argument.The receiveAllPosts action 
// will be used in the reducer to manipulate the state. 

// export const allPosts = () => (dispatch) => (
//   PostAPIUtil.allPosts().then(posts => (
//     dispatch(receiveAllPosts(posts))
//   ), err => {
//     return (
//       dispatch(receivePostErrors(err.responseJSON))
//     )
//   })
// );

export const fetchPosts = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    // fetch returns a promise that we map to json
    .then(res => res.json())
    // .json() returns another promise 
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts
    }))
    .catch(err => console.log(err));
}