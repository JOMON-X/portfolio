import React from "react";
import Card_n from "../ui/Card_n";
import loginImg from "../Assets/Images/login.png";
import KTWimg from "../Assets/Images/kt.png";
import { Container, Grid } from "@mui/material";
import H1 from "../ui/H1.jsx"

export default function Portfolio() {
  return (
    <>
      <Container>
        <Grid container display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Grid item >
          <H1 text={"Portfolio"}/>
          </Grid>
          <Grid item >
          <Grid>
            <Card_n
              C_image={loginImg}
              C_heading={"Login validation"}
              C_text={"simple single page log in validating with java script"}
            />
          </Grid>
          <Grid>
            <Card_n
              C_image={KTWimg}
              C_heading={"Kerala Tourism "}
              C_text={
                "designed and developed using html css and javascript this website provides a insight on kerala tourism district by district"
              }
            />
          </Grid>
          </Grid>
          
        </Grid>
      </Container>
    </>
  );
}
