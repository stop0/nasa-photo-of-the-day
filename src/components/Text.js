import React, { useState } from "react";
import axios from 'axios';
import styled from 'styled-components';



const WrapperDiv = styled.div`

    width: 100%;
    height: 100%;
    background-color : #75cdc8;
    padding:20px;
    text-align: left;
    font-size:30px;

`;




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
    <WrapperDiv className="search-bar-wrapper" >
        <p >{Text1()} {text}</p>
    </WrapperDiv>
  );
};
  export default Text;