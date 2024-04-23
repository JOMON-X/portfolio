import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";



export default function Tile({logo,alttext}) {
  return (
    <>
      <StyledTile>
        <Grid container >
          <Grid item>
            <div className="tileBody">
            <img src={logo} alt={alttext} />
            </div>
          </Grid>
        </Grid>
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
