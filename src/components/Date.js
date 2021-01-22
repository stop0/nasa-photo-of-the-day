import React, { useState } from "react";
import axios from 'axios';
import styled from 'styled-components';





const WrapperDiv = styled.div`

    width: 100%;
    height: 100%;
    background-color : #B1A296		;
    padding:20px;
`;


function Date (props) {
  const {date} = props

    return (
      <WrapperDiv className="search-bar-wrapper" >
          <h2 > {date}</h2>
      </WrapperDiv>
    );
  };
  
  export default Date;
  