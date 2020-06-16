import React, { Component } from 'react'

export class Posts extends Component {
  // the constructor is component state sans Redux 
  constructor(props) {
    super(props); 
    this.state = {
      posts: [] 
    }
  }
  // componentDidMount() is a hook that gets invoked right after a React component 
  // has been mounted aka after the first render() lifecycle.
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    // fetch returns a promise that we map to json
      .then(res => res.json())
      // .json() returns another promise 
      .then(data => this.setState({ posts: data }))
      .catch(err => console.log(err));
  }

  render() {
    const posts = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))
    return (
      <div>
        <h1>Posts</h1>
        {posts}
      </div>
    )
  }
}

export default Posts
