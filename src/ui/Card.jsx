import React from "react";
import styled from "styled-components";
import log from "../Assets/Images/login.png";

import Button from "./Button";

export default function Card() {
  return (
    <>
      <StyledCard>
        <div className="card">
        <a href="https://jomon-x.github.io/login/"><img src={log} alt="" className="card-image" /></a>
          <div className="card-body">
            
            <Button text={"Visit"}></Button>
          </div>
        </div>
      </StyledCard>
    </>
  );
}

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    width: 220px;
    height: 320px;
    border-radius: 20px;
    overflow: hidden;
    border: 8px solid white;
    position: relative;
    box-shadow: 0 0 10px rgb(68, 183, 203), 
              0 0 20px rgb(68, 183, 203);
  }

  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }

  /* .card-body {
    
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    background: #1f3d4738;
    backdrop-filter: blur(5px);
    border-radius: 15px;
    color: white;
    padding: 30px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 2s;
  } */

  



`;
