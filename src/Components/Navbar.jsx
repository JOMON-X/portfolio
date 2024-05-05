import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
    
  
  return (
    <>
      <StyledNav>
        <header>
          <div id="home" className="logo">
            <p> Mohammed Jouhar </p>
          </div>

          <nav className="navm">
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
          </nav>

          <span className="menuic">
            <MenuIcon  fontSize="large" sx={{ color: "rgb(68, 183, 203)" }} />
          </span>

        </header>
          
          
        
        <div className="sidenav">
        <nav className="navs">
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
          </nav>
           </div>
      </StyledNav>
    </>
  );
}
const StyledNav = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  header {
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0px;
    background: rgba(0, 0, 0, 0);
  }

  .logo {
    font-size: 30px;
    font-weight: bold;
    color: white;
    letter-spacing: 1.5px;
    cursor: pointer;
  }

  nav li {
    display: inline-block;
    list-style: none;
    padding: 0px 20px;
  }

  nav li a {
    font-size: 16px;
    font-weight: 500;
    color: white;
    text-decoration: none;
    cursor: pointer;
  }

  nav li a:hover {
    color: rgb(68, 183, 203);
    text-shadow: 0 0 10px rgb(68, 183, 203), 0 0 20px rgb(68, 183, 203),
      0 0 40px rgb(68, 183, 203);
    transition: all 0.4s ease 0s;
  }

  .menuic {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 5px rgb(68, 183, 203);
    border-radius: 5px;
    display: none;
    padding: 0px 5px;
  }
  .menuic:hover {
    box-shadow: 0 0 10px rgb(68, 183, 203), 0 0 20px rgb(68, 183, 203),
      0 0 40px rgb(68, 183, 203);
  }

  .navm {
    margin-left: 300px;
  }

  .sidenav{
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 350px;
    background-color: red;
    z-index: 1;

  }

  .navs{
    display: flex !important; 
    flex-direction: column !important;
    justify-content:center !important;
  }

  @media (max-width: 1087px) {
    .navm {
      display: none;
    }
    .menuic {
      display: block;
    }
  }
`;
