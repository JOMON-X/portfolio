import React from "react";
import H1 from "./H1";
import styled from "styled-components";
import { Grid, Stack } from "@mui/material";
import Card from "./Card";
import Card2 from "./Card2";

export default function Portfolio() {
  return (
    <>
      <Styledportfolio>
        <div id="port">
          <H1 text={"Portfolio"}></H1>
        </div>
        <Stack direction={"row"}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Card></Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Card2></Card2>
            </Grid>
          </Grid>
        </Stack>
      </Styledportfolio>
    </>
  );
}

const Styledportfolio = styled.div`
  text-align: center;
  .gen {
    margin-top: 100px;
    margin-bottom: 100px;
  }
`;
