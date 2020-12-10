import React, { useState } from "react";
import axios from 'axios';


function Title () {
    const [title, setTitle] = useState('')

    const Title1  = ()  => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=bzQyI69dTsLGdYrAxKCfgaqYp3xnTLP8Ad79aRSw')
        .then(function (response) {
          console.log(response.data.title);
          setTitle(response.data.title)
        })
        .catch(function (error) {
          console.log(error);
        })
        }

    return (
      <div className="search-bar-wrapper" >
          <h1 >{Title1()} {title}</h1>
      </div>
    );
  };
  
  export default Title;
  