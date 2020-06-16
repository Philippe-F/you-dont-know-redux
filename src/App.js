import React from 'react';
import './App.css';
import Posts from "./components/Posts";
import PostForm from "./components/PostForm"; 

function App() {
  return (
    <React.Fragment>
      <PostForm/>
      <Posts/>
    </React.Fragment>
  );
}

export default App;
