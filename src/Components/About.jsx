import React from "react";
import H1 from "../ui/H1";
import styled from "styled-components";
import { Grid, Stack } from "@mui/material";
export default function About() {
  return (
    <>
      <StyledAbout>
        <Grid container>
          <Grid item sx={{ textAlign:"center" }}>
            <Stack spacing={7}>
            <Grid item >
              <H1 text={"About"} ></H1>
            </Grid>
            <Grid item>
              <div id="About" className="hd">
                <p>
                  I am Mohammed Jouhar, a dedicated MERN Stack developer from
                  Kerala, India,
                  <br /> with a fervent passion for crafting seamless web
                  experiences. My journey in web development began with a
                  curiosity for creating and a commitment to excellence, which
                  has since evolved into a professional pursuit of designing,
                  developing, debugging, and deploying sophisticated web
                  applications. <br /> With a robust technical skill set that
                  includes HTML, CSS, JavaScript, React.js, Node.js, Express.js,
                  and database management with MongoDB,
                  <br /> I bring a comprehensive approach to the web development
                  process. My proficiency in version control with Git, coupled
                  with a keen eye for design utilizing frameworks like Material
                  UI and Bootstrap, ensures that my projects are not only
                  functional but also aesthetically pleasing. <br />
                  My personal skills are as diverse as my technical ones. I
                  thrive in team settings, valuing collaboration and the synergy
                  it creates. Adaptability is one of my core strengths, allowing
                  me to navigate the ever-changing landscape of web technologies
                  with ease. Moreover, my communication skills ensure that I
                  articulate ideas clearly and collaborate effectively with
                  clients and team members alike. <br />
                  As I continue to seek exciting opportunities in web
                  development, <br /> I am eager to bring my unique blend of
                  skills and passion to a team that values innovation and
                  quality. <br /> <br />
                  <div className="endcr">
                    {" "}
                    <h3>Let's create the web of tomorrow, together.</h3>{" "}
                  </div>
                </p>
              </div>
            </Grid> </Stack>
           
          </Grid>
        </Grid>
      </StyledAbout>
    </>
  );
}

const StyledAbout = styled.div`
  div p {
    color: white;
  
  }
  .hd h3 {
    color: rgb(68, 183, 203);
  }

  .endcr :hover {
    color: rgb(68, 183, 203);
    text-shadow: 0 0 10px rgb(68, 183, 203), 0 0 20px rgb(68, 183, 203),
      0 0 30px rgb(68, 183, 203);

    transition: all 0.4s ease-in-out 0s;
    cursor: pointer;
  }
`;
