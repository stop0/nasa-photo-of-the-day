import React, { useState } from "react";
import axios from 'axios';
import styled from 'styled-components';



const WrapperDiv = styled.div`

    width: 100%;
    height: 100%;
    color : #403e44;
    background-color : #379683;
    padding:20px;

`;

function Title (props) {
    const {title} = props
    return (
      <WrapperDiv className="WrapperDiv" >
          <h1 >{title}</h1>
      </WrapperDiv>
    );
  };
  
  export default Title;
  