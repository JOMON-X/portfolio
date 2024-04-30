import { Container, Grid, Stack } from "@mui/material";
import React from "react";
import "./App.css";
import About from "./Components/About";
import Me_Section from "./Components/Me_Section";
import Footer from "./Components/Footer";
import Headshot from "./Components/Headshot";
import Skills from "./Components/Skills.jsx"
import Portfolio from "./Components/Portfolio.jsx";
import Test from "./Test.jsx";

export default function App() {
  return (
    <>
      <Container>
        <Grid container>
          <Stack spacing={10}>
            <Grid container rowGap={10}>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Me_Section />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Headshot />
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <About />
            </Grid>
          
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Skills/>
            </Grid>
 
            <Grid item xs={12} sm={12} md={12} lg={12}>
            <Portfolio></Portfolio>
            </Grid>

             <Grid item xs={12} sm={12} md={12} lg={12}>
              
            </Grid>

          </Stack>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}
