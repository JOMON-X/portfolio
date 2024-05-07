import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import H1 from "../ui/H1.jsx";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

export default function NavbarN() {
  //need to rewrite with use satate 

  function handleOpen (){
   document.getElementById("navSide").style.display ="block"
   document.getElementById("header").style.display="none"
  }

  function handleClose () {
    document.getElementById("navSide").style.display="none"
  }
//-----------------------------//


  return (
    <>
      <StyledNavbar>
        <Grid container>
          <Grid item id='header' className="header">
            <Grid item id="home" className="logo">
              <H1 text={"Mohammed Jouhar"} />
            </Grid>
            <Grid item className="navMain">
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#About">About</a>
                </li>
                <li>
                  <a href="#skill">Skils</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </Grid>
            <Grid item  >
              <div className="menuIcon" id="menuIcon" onClick={handleOpen} >
              <MenuIcon  fontSize="large" sx={{ color: "rgb(68, 183, 203)" }} />
              </div>
              
            </Grid>
          </Grid>
          <Grid item id='navSide' className="navSide" display={"flex"} justifyContent={"end"}>
          <div id='closeIcon'className="closeIcon" onClick={handleClose}>
          <CloseIcon fontSize="large" sx={{ color: "rgb(68, 183, 203)" }}/>
          </div>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#skill">Skils</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <Grid item className="cred">
              <p> © 2024 ARES-X</p>
            </Grid>
          </Grid>
        </Grid>
      </StyledNavbar>
    </>
  );
}
const StyledNavbar = styled.div`
  .header {
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0px;
    background: rgb(16, 24, 26);
    position: fixed;
    z-index: 10;
  }

  .navMain li {
    display: inline-block;
    list-style: none;
    padding: 0px 20px;
  }

  .navMain li a {
    font-size: 16px;
    font-weight: 500;
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
  .navMain li a:hover {
    color: rgb(68, 183, 203);
    text-shadow: 0 0 10px rgb(68, 183, 203), 0 0 20px rgb(68, 183, 203),
      0 0 40px rgb(68, 183, 203);
    transition: all 0.4s ease 0s;
  }

  .menuIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 5px rgb(68, 183, 203);
    border-radius: 5px;
    display: none;
    padding: 0px 5px;
  }
  .menuIcon:hover {
    box-shadow: 0 0 10px rgb(68, 183, 203), 0 0 20px rgb(68, 183, 203),
      0 0 40px rgb(68, 183, 203);
  }

  .navSide {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 350px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(3px);
    z-index: 1;
    display: none;
  }

  .navSide li {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 15px 20px;
  }
  .navSide li a {
    font-size: 16px;
    font-weight: 500;
    color: white;
    text-decoration: none;
    cursor: pointer;
  }

  .navSide li a:hover {
    color: rgb(68, 183, 203);
    text-shadow: 0 0 10px rgb(68, 183, 203), 0 0 20px rgb(68, 183, 203),
      0 0 40px rgb(68, 183, 203);
    transition: all 0.4s ease 0s;
  }

  .cred{
    margin-top: 350px;
  }
  .closeIcon{
    padding: 10px;
  }

  @media (max-width: 1087px) {
    .navMain {
      display: none;
    }
    .menuIcon {
      display: block;
    }
  
  }
`;
