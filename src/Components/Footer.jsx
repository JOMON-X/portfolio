import { Grid } from '@mui/material';
import React from 'react'
import styled from 'styled-components'



export default function Footer() {
  return (
    <>
      <StyledFooter>
        <Grid container >
          <Grid item className='footer' sx={{fontSize:{xs:"small",sm:"small",md:"medium",lg:"large"}}}> 
         
            <h3>
                <span className='cr'> © 2024 ARES-X  | </span>
                <span className='ds'>Designed by</span> <span className='mj'>Mohammed jouhar</span>
                </h3>
       
          </Grid>
        </Grid>
        
      </StyledFooter>
    </>
  )
}

const StyledFooter=styled.div`
    .footer{
     
        height: 100px;
        width: 100%;
   
        
        background: rgba(0, 0, 0, 0);
        box-shadow:inset  0 5px 4px -2px rgb(68, 183, 203) ;
       
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .ds{
        color: white;
    }
    .mj{
        color: rgb(68, 183, 203);
        text-shadow: 0 0 5px rgb(68, 183, 203),
                     0 0 10px rgb(68, 183, 203);
    }
    .cr{
        color:rgb(68, 183, 203) ;
    }
`;