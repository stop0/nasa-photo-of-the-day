import React, { useState } from "react";
import axios from 'axios';


function Date () {
    const [date, setDate] = useState('')

    const Date1  = ()  => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=bzQyI69dTsLGdYrAxKCfgaqYp3xnTLP8Ad79aRSw')
        .then(function (response) {
          console.log(response.data.date);
          setDate(response.data.date)
        })
        .catch(function (error) {
          console.log(error);
        })
        }

    return (
      <div className="search-bar-wrapper" >
          <button onClick = {Date1}> Click for date{date}</button>
      </div>
    );
  };
  
  export default Date;
  