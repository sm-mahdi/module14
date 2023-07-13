import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header title="My Simple React App" />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
