import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import SetTitle from './title/title.js'
import SetImage from './image/image.js'
import SetExplanation from './explanation/explanation.js'
import SetDate from './datepicker/datepicker.js'

// Function to convert date() to correct format for API
function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}

function App() {
  const [nasaPic, setNasaPic] = useState();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=daPY8g4dfWWL5P8V4cy9GQhnr11tTJE3bXrGtcC0" + "&date=" + formatDate(date))
      .then( response => {
        // console.log(response.data)
        setNasaPic(response.data)
      })
      .catch(err => console.log("Error:", err))
  }, [date]);

  return (
    <div className="App">
      <SetTitle nasa={nasaPic}/>
      <SetImage nasa={nasaPic}/>
      <SetExplanation nasa={nasaPic}/>
      <SetDate date={date} changeDate={setDate}/>
    </div>
  );
}

export default App;
