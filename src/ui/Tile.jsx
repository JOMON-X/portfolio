import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";



export default function Tile({logo,alttext,text}) {
  return (
    <>
      <StyledTile>
      
            <div className="tileBody">
            <img src={logo} alt={alttext} />
            <h1>{text}</h1>
            </div>
        
      </StyledTile>
    </>
  );
}

const StyledTile = styled.div`
  .tileBody {
    height: 150px;
    width: 150px;
    border-radius: 5px;
    background-color: rgb(68, 183, 203);
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
