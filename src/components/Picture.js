import React, { useState } from "react";
import axios from 'axios';
import styled from 'styled-components';



const WrapperDiv = styled.div`

    width: 100%;
    height: 100%;
    background-color : #fbc34a	;
    padding:20px;

    
`;



function Picture (props) {
  
    return (
      <WrapperDiv className="search-bar-wrapper" >
          <img src = {props.pic}  alt="Nasa Daily Pic"/> 
      </WrapperDiv>
    );
  };
  export default Picture;