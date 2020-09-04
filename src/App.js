import React from 'react';
import './App.css';
import { Index } from './components/Home/index';
import { SEO } from './components/SEO/SEO';
import { Layout } from './components/Home/Layout';


export const App = () => {
  return (
      <div className="App">
        <SEO title="Shoppies" />
        <h1>Movie Nomination</h1>
        <Index></Index>
    </div>
  );
}

export default App;
