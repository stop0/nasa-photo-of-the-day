import React, { useState } from "react";
import axios from 'axios';


function Text () {
  const [text, setText] = useState('')

  const Text1  = ()  => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=bzQyI69dTsLGdYrAxKCfgaqYp3xnTLP8Ad79aRSw')
      .then(function (response) {
        console.log(response.data.explanation);
        setText(response.data.explanation)
      })
      .catch(function (error) {
        console.log(error);
      })
      }

  return (
    <div className="search-bar-wrapper" >
        <p >{Text1()} {text}</p>
    </div>
  );
};
  export default Text;