import React, { useState } from "react";
import axios from 'axios';


function Picture () {
    const [picture, setPicture] = useState('')
  
    const Picture1  = ()  => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=bzQyI69dTsLGdYrAxKCfgaqYp3xnTLP8Ad79aRSw')
        .then(function (response) {
          console.log(response.data.url);
          setPicture(response.data.url)
        })
        .catch(function (error) {
          console.log(error);
        })
        }
  
    return (
      <div className="search-bar-wrapper" >
          <button onClick = {Picture1}> Click for Picture{picture}</button>
      </div>
    );
  };
  export default Picture;