import React from 'react';
import './App.css';
import Posts from "./components/Posts";
import PostForm from "./components/PostForm"; 
import { Provider } from "react-redux";
import store from "./store/store"; 

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <PostForm/>
        <Posts/>
      </React.Fragment>
    </Provider>
  );
}

export default App;
