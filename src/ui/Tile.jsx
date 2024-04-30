import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";



export default function Tile({logo,alttext,text}) {
  return (
    <>
      <StyledTile>
            <div className="tile">
            <div className="tileBody">
            <img src={logo} alt={alttext} />
            <h1>{text}</h1>
            </div>
        
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

  .tile :hover{
    animation: bounce 2s infinite ease-in-out;
    
    @keyframes bounce {
    0%{transform:translateY(0)}
    40%{transform:translateY(-20px)}
    60%{transform:translateY(-10px)}
  }
  }

 
`;
