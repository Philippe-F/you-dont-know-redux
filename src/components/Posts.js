import React, { Component } from 'react'

export class Posts extends Component {
  // componentDidMount() is a hook that gets invoked right after a React component 
  // has been mounted aka after the first render() lifecycle.
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    // fetch returns a promise that we map to json
      .then(res => res.json())
      // .json() returns another promise 
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
      </div>
    )
  }
}

export default Posts
