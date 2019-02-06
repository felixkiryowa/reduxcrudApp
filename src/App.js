import React, { Component } from 'react';
import './App.css';
import PostForm from './components/PostForm';
import AllPost from './components/AllPost';
import Counting from './components/Counting';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="navbar">
            <h2 className="center ">Post It</h2>
          </div>
          <PostForm />
          <AllPost />
          <Counting />
      </div>
    );
  }
}

export default App;
