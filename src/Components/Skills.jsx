import { Grid, Stack } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Tile from "../ui/Tile";
import htmlLogo from "../Assets/Icons/html-5-logo-svgrepo-com.svg";
import cssLogo from "../Assets/Icons/css3-logo-svgrepo-com.svg";
import jsLogo from "../Assets/Icons/javascript-logo-svgrepo-com.svg";
import reactLogo from "../Assets/Icons/react-logo-svgrepo-com.svg";
import nodeLogo from "../Assets/Icons/nodejs-1-logo-svgrepo-com.svg";
import mongoLogo from "../Assets/Icons/mongodb-logo-svgrepo-com.svg";
import materialLogo from "../Assets/Icons/material-ui.svg";
import bootstrapLogo from "../Assets/Icons/bootstrap-4-logo-svgrepo-com.svg";
import H1 from "../ui/H1";

export default function Skills() {
  return (
    <>
      <StyledSkills>
        <Grid container spacing={10}>
          <Grid item id="skill" xs={12} display={"flex"} justifyContent={"center"}>
         <H1 text={"My skills"}/>    
         </Grid>
         <Grid item>
         <Grid container sx={{rowGap:{xs:3.5,sm:5,md:5,lg:15}}}>
          
          <Grid  xs={6} sm={3} md={3} lg={3} display={"flex"} justifyContent={"center"}>
              <Tile logo={htmlLogo}/>
          </Grid>
          <Grid  xs={6} sm={3} md={3} lg={3} display={"flex"} justifyContent={"center"}>
              <Tile logo={cssLogo}/>
          </Grid>
          <Grid  xs={6} sm={3} md={3} lg={3} display={"flex"} justifyContent={"center"}>
              <Tile logo={jsLogo}/>
          </Grid>
          <Grid  xs={6} sm={3} md={3} lg={3} display={"flex"} justifyContent={"center"}>
              <Tile logo={reactLogo}/>
          </Grid>
          <Grid  xs={6} sm={3} md={3} lg={3} display={"flex"} justifyContent={"center"}>
              <Tile logo={nodeLogo}/>
          </Grid>
          <Grid  xs={6} sm={3} md={3} lg={3} display={"flex"} justifyContent={"center"}>
              <Tile logo={mongoLogo}/>
          </Grid>
          <Grid  xs={6} sm={3} md={3} lg={3} display={"flex"} justifyContent={"center"}>
              <Tile logo={materialLogo}/>
          </Grid>
          <Grid  xs={6} sm={3} md={3} lg={3} display={"flex"} justifyContent={"center"}>
              <Tile logo={bootstrapLogo}/>
          </Grid>
        
      </Grid>
          </Grid>
         
        </Grid>
      </StyledSkills>
    </>
  );
}
const StyledSkills = styled.div``;
