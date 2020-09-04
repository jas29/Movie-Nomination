import React from 'react';
import './App.css';
import { Index } from './components/Home/index';
import { SEO } from './components/SEO/SEO';
import { Layout } from './components/Home/Layout';


export const App = () => {
  return (
      <div className="App">
        <Layout>
          <h1>test</h1>
          <Index></Index>
        </Layout>
    </div>
  );
}

export default App;
