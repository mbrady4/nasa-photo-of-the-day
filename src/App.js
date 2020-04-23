import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import SetTitle from './title/title.js'
import SetImage from './image/image.js'
import SetExplanation from './explanation/explanation.js'

function App() {
  const [nasaPic, setNasaPic] = useState();

    useEffect(() => {
      axios
        .get("https://api.nasa.gov/planetary/apod?api_key=daPY8g4dfWWL5P8V4cy9GQhnr11tTJE3bXrGtcC0")
        .then( response => {
          // console.log(response.data)
          setNasaPic(response.data)
        })
        .catch(err => console.log("Error:", err))
    }, []);

  return (
    <div className="App">
      <SetTitle nasa={nasaPic}/>
      <SetImage nasa={nasaPic}/>
      <SetExplanation nasa={nasaPic}/>
    </div>
  );
}

export default App;
