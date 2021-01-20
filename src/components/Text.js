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




function Text (props) {


  return (
    <WrapperDiv className="search-bar-wrapper" >
        <p > {props.text}</p>
    </WrapperDiv>
  );
};
  export default Text;