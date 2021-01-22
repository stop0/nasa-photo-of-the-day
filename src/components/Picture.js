import React, { useState } from "react";
import axios from 'axios';
import styled from 'styled-components';



const WrapperDiv = styled.div`

    width: 100%;
    height: 100%;
    background-color : #7395AE	;
    padding:20px;

    
`;



function Picture (props) {
    const {pic} = props
    return (
      <WrapperDiv className="search-bar-wrapper" >
          <img src = {pic}  alt="Nasa Daily Pic"/> 
      </WrapperDiv>
    );
  };
  export default Picture;