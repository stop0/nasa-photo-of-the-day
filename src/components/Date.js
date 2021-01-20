import React, { useState } from "react";
import axios from 'axios';
import styled from 'styled-components';





const WrapperDiv = styled.div`

    width: 100%;
    height: 100%;
    background-color : #ffe7b1		;
    padding:20px;
`;


function Date (props) {


    return (
      <WrapperDiv className="search-bar-wrapper" >
          <h2 > {props.date}</h2>
      </WrapperDiv>
    );
  };
  
  export default Date;
  