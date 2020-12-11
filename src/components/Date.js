import React, { useState } from "react";
import axios from 'axios';
import styled from 'styled-components';





const WrapperDiv = styled.div`

    width: 100%;
    height: 100%;
    background-color : #ffe7b1		;
    padding:20px;
`;


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
      <WrapperDiv className="search-bar-wrapper" >
          <h2 >{Date1()} {date}</h2>
      </WrapperDiv>
    );
  };
  
  export default Date;
  