import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
  
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { Container, Grid, Stack } from "@mui/material";

export default function () {
  return (
    <>

    <StyledSocial>
   
      <Grid container>
        <Grid item  >
          <Stack direction={"row"} spacing={3}>
          <div className="ic">
          <a href="https://www.instagram.com/jomon.jo_?igsh=a2ZwOGltOHUxeWph">
            <FontAwesomeIcon
              icon={faInstagram}
              size="3x"
              color="rgb(68, 183, 203)"
            />
          </a>
        </div>

        <div className="ic"> 
          <a href="https://www.facebook.com/profile.php?id=100049941675499&mibextid=ZbWKwL">
            <FontAwesomeIcon
              icon={faFacebook}
              size="3x"
              color="rgb(68, 183, 203)"
            />
          </a>
        </div>

        <div className="ic">
          <a href="https://github.com/JOMON-X">
            <FontAwesomeIcon
              icon={faGithub}
              size="3x"
              color="rgb(68, 183, 203)"
            />
          </a>
        </div>

        <div className="ic">
          <a href="https://www.linkedin.com/in/mohammed-jouhar-/">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="3x"
              color="rgb(68, 183, 203)"
            />
          </a>
        </div>

        <div className="ic">
          <a href="https://www.youtube.com/@Ares-x-Gaming">
            <FontAwesomeIcon
              icon={faYoutube}
              size="3x"
              color="rgb(68, 183, 203)"
            />
          </a>
        </div>
          </Stack>
        </Grid>
      </Grid>
    
    </StyledSocial>
     
    </>
  );
}

const StyledSocial=styled.div`
.ic:hover{
  filter: drop-shadow(0 0 20px rgb(68, 183, 203));
 
    transition: all 0.4s ease-in-out 0ms;

}



`;
