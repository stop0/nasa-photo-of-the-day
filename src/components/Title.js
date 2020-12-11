import React, { useState } from "react";
import axios from 'axios';
import styled from 'styled-components';



const WrapperDiv = styled.div`

    width: 100%;
    height: 100%;
    color : #403e44;
    background-color : #ffe7b1;
    padding:20px;

`;

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
      <WrapperDiv className="WrapperDiv" >
          <h1 >{Title1()} {title}</h1>
      </WrapperDiv>
    );
  };
  
  export default Title;
  