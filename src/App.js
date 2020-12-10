import React from "react";
import "./App.css";
import axios from 'axios';
import Date from './components/Date'
import Text from './components/Text'
import Title from './components/Title'
import Picture from './components/Picture'

function App() {

    axios.get('https://api.nasa.gov/planetary/apod?api_key=bzQyI69dTsLGdYrAxKCfgaqYp3xnTLP8Ad79aRSw')
    .then(function (response) {
      console.log(response.data.title);
    })
    .catch(function (error) {
      console.log(error);
    })

  return (
    <div className="App">
      < Title  />
      < Picture />
      < Date />
      < Text />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
