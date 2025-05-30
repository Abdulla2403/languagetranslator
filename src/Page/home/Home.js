// import { Header } from 'antd/es/layout/layout';
import React from 'react'
import styled from 'styled-components';
import Center from '../../components/center/Center'
// import Footer from '../../components/footer/Footer';
// import Grid from '../../components/grid/Grid';
import Header from '../../components/header/Header'
// import Instruction from '../../components/instruction/Instruction';

export default function Home() {
  return (
   <>
   <UiDesign >
      <Header/>
      <Center/>
    </UiDesign>
    {/* <Instruction/>/ */}
    {/* <Grid/> */}
    {/* <Footer/> */}
   </>
    

  )
}
const UiDesign = styled.div`
  width: 100%;
  height: 100vh;
background-color:#5B8FB9 ;
/* background-image: linear-gradient(to right top, #242427, #1c2327, #132223, #11211a, #191d0c); */
  /* background-image: linear-gradient(to right top, #3f7edc, #5d74bd, #676b9f, #686482, #615e68) */
  `;
