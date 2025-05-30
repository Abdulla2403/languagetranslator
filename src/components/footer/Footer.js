import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <ForFooter
    
    >
      
       <a style={{color:"white",textDecoration:"none"}} href="https://ramavatarmeena.netlify.app/" target="_blank" rel="noreferrer">
       <H1>
       © 2023 
      RAMAVATAR MEENA
      </H1>
       
          </a>
          
    </ForFooter>
  );
}

const ForFooter = styled.div`
 width: 100%;
        height: 15vh;
        background-color:black;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(to right top, #111419, #181f22, #222929, #2f3430, #3d3e39);
        @media (max-width: 768px) {
            height: 10vh;

  }
`;

const H1 = styled.h1`
font-size:12px ;
font-weight:500 ;

`;
