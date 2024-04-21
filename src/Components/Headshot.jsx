import React from 'react'
import jomon from "../Assets/Images/jomon.png"
import styled from 'styled-components'
import { Grid } from '@mui/material'


export default function Headshot() {
  return (
    <>
<Styledimg>
    <Grid container display={'flex'} justifyContent={'center'}alignItems={'center'}>
        <Grid item >
           
                <img src={jomon} alt="Mohammed jouhar headshot" />
            
        </Grid>
    </Grid>
</Styledimg>
    </>
  )
}
const Styledimg = styled.div`
 img {
    height: 400px;
  width: 350px;

  //for responsive image in react
    max-width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
}

`
