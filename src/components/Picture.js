import React, { useState } from "react";
import axios from 'axios';
import styled from 'styled-components';



const WrapperDiv = styled.div`

    width: 100%;
    height: 100%;
    background-color : #fbc34a	;
    padding:20px;

    
`;



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
      <WrapperDiv className="search-bar-wrapper" >
          {Picture1()}
          <img src = {picture}  alt="Nasa Daily Pic"/> 
      </WrapperDiv>
    );
  };
  export default Picture;