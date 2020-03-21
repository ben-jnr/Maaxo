import React from 'react';
import './App.css';
import Landing from './Components/Landing';
import About from './Components/About';
import Products from  './Components/Products';
import Form from './Components/Form';
import Contact from './Components/Contact';

function App() {
  return (
    <div id="App">
      <Landing />
      <About />
      <Products />
      <Form />
      <Contact />
    </div>
  );
}

export default App;
