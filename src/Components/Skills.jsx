import React from "react";
import styled from "styled-components";
import { Container, Grid, Stack, Box } from "@mui/material";
import H1 from "./H1";

export default function Skills() {
  return (
    <>
  
      <StyledSkills>
       
       <body>
       <div id="skill" className="skills">
               <H1 text={"My Skills"}></H1>
                <li>
                  <h3>html</h3>
                  <span className="bar">
                    <span className="html"></span>
                  </span>
                </li>
                <li>
                  <h3>css</h3>
                  <span className="bar">
                    <span className="css"></span>
                  </span>
                </li>
                <li>
                  <h3>javascript</h3>
                  <span className="bar">
                    <span className="js"></span>
                  </span>
                </li>
                <li>
                  <h3>react</h3>
                  <span className="bar">
                    <span className="react"></span>
                  </span>
                </li>
              </div> 
       </body>
       
      </StyledSkills>
    </>
  );
}

const StyledSkills = styled.div`
  * {
    list-style: none;
    
  }
  body {
    
    color: #fff;
  }
  h1 {
    text-align: center;
  }
  h3 {
    margin: 5px;
  }

  .skills{
    width: 500px;
    margin: 60px auto;
    color: #fff;
    padding: 20px;
    box-shadow: 0 14px 28px rgba (0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  .skills li{
    margin: 20px 0;
    padding: 10px;
  }

  .bar{
    background: #353b48;
    display: block;
    height: 20px;
    border: 1px solid rgba(0,0,0,0.3);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25,.8 ,.25 ,1);
  }

  .bar:hover{
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  .bar span {
height: 20px;
float: left;
background: linear-gradient(135deg,rgb(68, 183, 203)0% ,rgb(251, 251, 251)100%);
  }
.html{
    width: 90%;
    animation: html 3s;
}
.css{
    width: 70%;
    animation: css 3s;
}
.js{
    width: 60%;
    animation: js 3s;
}
.react{
    width: 60%;
    animation: react 3s;
};

@keyframes html{
    0%{
        width: 0%;
    }
    100%{
        width: 90%;
    }
}

@keyframes css{
    0%{
        width: 0%;
    }
    100%{
        width: 70%;
    }
}

@keyframes js{
    0%{
        width: 0%;
    }
    100%{
        width: 60%;
    }
}

@keyframes react{
    0%{
        width: 0%;
    }
    100%{
        width: 60%;
    }
}


`;
