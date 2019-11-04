import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"

// local imports
import Nav from './components/Nav.js'
import Content from './components/Content.js'
import Footer from './components/Footer.js'


// package to keep my api key a secret
require('dotenv').config();

function App() {
  const nasaUrl = process.env.REACT_APP_API_URL || "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

  const [data, setData] = useState()

  useEffect(() => {
    axios.get(nasaUrl)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Nav />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
