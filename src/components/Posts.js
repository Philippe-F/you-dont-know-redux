import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchPosts from '../actions/PostActions';

export class Posts extends Component {
// We dont need component state or the componentDidMount() because state is now 
// centralized in the store. 

  // the constructor is component state sans Redux 
  // constructor(props) {
  //   super(props); 
  //   this.state = {
  //     posts: [] 
  //   }
  // }
  // componentDidMount() is a hook that gets invoked right after a React component 
  // has been mounted aka after the first render() lifecycle.
  componentDidMount() {
    this.props.fetchPosts();
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

export default connect(null, { fetchPosts })(Posts);
