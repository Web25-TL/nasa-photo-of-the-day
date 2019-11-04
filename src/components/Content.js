import React, { useState, useEffect } from "react";
import axios from "axios";



function Content() {
  const nasaUrl =
    "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

  const [nasaObj, setNasaObj] = useState();

  useEffect(() => {
    axios
      .get(nasaUrl)
      .then(res => {
        console.log(res);
        setNasaObj(res.data);
      })
      .catch(err => console.log(err));
  }, [nasaUrl]);

  if (nasaObj === undefined) {
    return <h3>Loading...</h3>;
  } else {
    return (
      <div>
        <h1>{nasaObj.title}</h1>
      <img src={nasaObj.hdurl} alt={nasaObj.explanation} />
      <p>
        <span className="date">{nasaObj.date}</span>
        <span className="copyright">{nasaObj.copyright}</span>
      </p>
      <p className="explanation">{nasaObj.explanation}</p>
      </div>
    );
  }
}

export default Content;
