import React from "react";
import "./App.css";

// local imports
import Nav from './components/Nav.js'
import Content from './components/Content.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="App">
      <Nav />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
