import Twetch from '@twetch/sdk';
import PostList from './components/PostList';
import WritePost from './components/WritePost';
import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

const App = (props) =>  {

  return (
    <div className="App">
      <PostList posts={props.posts} />
    </div>
  );
}

// <WritePost twetch={props.twetch} />

export default App;
