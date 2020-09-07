import React from 'react';
import './App.css';
import { Index } from './components/Home/index';
import { SEO } from './components/SEO/SEO';
import { Layout } from './components/Home/Layout';
import { Navbar } from './components/Navbar/Navbar';


export const App = () => {
  return (
    <div className="App">
      <SEO title="Shoppies" />
      <Navbar/>
      <Index></Index>
    </div>
  );
}

export default App;
