import React from "react";
import { Grid, Stack } from "@mui/material";
import H1 from "../ui/H1";
import styled from "styled-components";
import Social from "./Social";
import Button from "../ui/Button";
import DownloadIcon from '@mui/icons-material/Download';

export default function Me_Section() {
  return (
    <>
      <Styledintro>
        <Grid Container>
          <Grid
            item
            sx={{
              textAlign: { md: "left", lg: "left", sm: "left", xs: "center" },
              
            }}
          >
            <Stack direction={"column"} spacing={3.5}>
              <div className="intro">
                <h3>Hello,its Me </h3>
                <H1 text="Mohammed Jouhar" />
              </div>

              <div className="intro">
                <h3>And i'am a Full Stack Web Developer </h3>
              </div>
              <div className="intro">
                <p>
                  "Passionate MERN stack enthusiast dedicated to creating
                  seamless and engaging web experiences. <br /> Proficient in
                  building robust applications that blend functionality with
                  elegant design."
                </p>
              </div>
             
                  
                    <Grid item sx={{display:"flex",justifyContent: {
                md: "left",
                lg: "left",
                sm: "left",
                xs: "center",
              }}}>  <Social /></Grid>
                   <Grid item sx={{display:"flex",justifyContent: {
                md: "left",
                lg: "left",
                sm: "left",
                xs: "center",
              }}}><Button
                      text={"Download CV"}
                      handleclick={() => alert("mair")}
                      icon={ <DownloadIcon sx={{color:'white'}}/> }
                    ></Button></Grid>  
               
            </Stack>
          </Grid>
        </Grid>
      </Styledintro>
    </>
  );
}

const Styledintro = styled.div`
  .intro {
    color: white;
  }
`;
