import React, { useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Date from './components/Date'
import Text from './components/Text'
import Title from './components/Title'
import Picture from './components/Picture'
import styled from 'styled-components';

const WrapperDiv = styled.div`

padding: 0;
border: 0;
box-sizing: border-box;
`;





function App() {
  

  useEffect(() => {

    axios.get('https://api.nasa.gov/planetary/apod?api_key=bzQyI69dTsLGdYrAxKCfgaqYp3xnTLP8Ad79aRSw')
    .then(function (response) {
      console.log(response.data.title);
    })
    .catch(function (error) {
      console.log(error);
    })


  })

  return (
    <WrapperDiv className="App">
      < Title  />
      < Picture />
      < Text />
      < Date />


    </WrapperDiv>
  );
}

export default App;
