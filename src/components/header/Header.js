import React from 'react'
import styled from 'styled-components';

export default function Header() {
  return (
    <ForHeader>
    <H2>English2RegionalLanguages</H2>
    </ForHeader>
  )
}

const ForHeader = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  padding-left:10px;
  @media (max-width: 768px) {
 justify-content:center ;

  }
  /* background-color: red; */
`;
const H2 = styled.h2`
font-size:20px;
color:white;
font-weight:500;
`;