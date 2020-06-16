import React, { Component } from 'react'

export class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault();
    
    const post = {
      title: this.state.title,
      body: this.state.body
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: 'POST',
      headers: {
        'content-type': 'application/JSON'
      },

      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
 
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title:</label>
            <br/>
            <input 
              type="text" 
              name="title" 
              value={this.state.title}
              onChange={this.onChange}
              placeholder="Add title..."
            /> 
          </div>
          <br/>
          <div>
            <label>Body:</label>
            <br/>
            <textarea 
              type="text" 
              name="body" 
              value={this.state.body}
              onChange={this.onChange}
              placeholder="Add Todo..."
            /> 
          </div>
          <br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default PostForm
