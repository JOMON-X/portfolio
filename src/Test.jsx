import { Grid } from "@mui/material";
import React from "react";
import H1 from "./ui/H1";
import Card_n from "./ui/CardN.jsx";
import styled from "styled-components";
import loginImg from './Assets/Images/login.png'
import ktwImg from './Assets/Images/kt.png'

export default function Test() {
  return (
    <>
      <StyledPortfolio>
        <Grid container rowGap={10}>
          <Grid item xs={12} display={"flex"} justifyContent={"center"} >
            <H1 text={"Portfolio"} />
          </Grid>
            
            <Grid container sx={{rowGap:{xs:5,sm:10}}} display={"flex"} justifyContent={"space-center"}> 
            <Grid xs={12} sm={6} md={6} lg={3} display={"flex"} justifyContent={"center"}>
             <Card_n C_image={loginImg} C_heading={"Log in Validation"} C_text={"simple single page log in validating with java script"}/>
            </Grid>
            <Grid xs={12} sm={6} md={6} lg={3} display={"flex"} justifyContent={"center"}>
            <Card_n C_image={ktwImg} C_heading={"Kerala tourism"} C_text={"designed and developed using html css and javascript this website provides a insight on kerala tourism district by district"}/>
            </Grid>
            <Grid xs={12} sm={6} md={6} lg={3} display={"flex"} justifyContent={"center"}>
             <Card_n C_image={loginImg} C_heading={"Log in Validation"} C_text={"simple single page log in validating with java script"}/>
            </Grid>
            <Grid xs={12} sm={6} md={6} lg={3} display={"flex"} justifyContent={"center"}>
            <Card_n C_image={ktwImg} C_heading={"Kerala tourism"} C_text={"designed and developed using html css and javascript this website provides a insight on kerala tourism district by district"}/>
            </Grid>
            </Grid>
          
        </Grid>
      </StyledPortfolio>
    </>
  );
}
const StyledPortfolio = styled.div``;
