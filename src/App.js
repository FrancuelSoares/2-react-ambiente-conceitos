import React from 'react';

import './App.css';

import profile from './assets/imgs/francuel.jpg';

import TechList from './components/TechList';

import Header from './components/facebook/Header';
import PostList from './components/facebook/PostList';

function App() {
  // return <TechList />

  return (
    <>
      <Header />
      <PostList />
    </>
  );
}

export default App;