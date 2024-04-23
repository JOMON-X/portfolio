import { Grid, Stack } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Tile from '../ui/Tile'
import htmlLogo from "../Assets/Icons/html-5-logo-svgrepo-com.svg"
import cssLogo from "../Assets/Icons/css3-logo-svgrepo-com.svg"
import jsLogo from "../Assets/Icons/javascript-logo-svgrepo-com.svg"
import reactLogo from "../Assets/Icons/react-logo-svgrepo-com.svg"
import nodeLogo from "../Assets/Icons/nodejs-1-logo-svgrepo-com.svg"
import mongoLogo from "../Assets/Icons/mongodb-logo-svgrepo-com.svg"
import materialLogo from "../Assets/Icons/material-ui.svg"
import bootstrapLogo from "../Assets/Icons/bootstrap-4-logo-svgrepo-com.svg"

export default function Skills() {
  return (
    <>
      <StyledSkills>
        <Grid container>
          <Grid item>
            <Stack direction={'row'} spacing={5}>
             <Tile logo={htmlLogo} />
             <Tile logo={cssLogo} />
             <Tile logo={jsLogo} />
             <Tile logo={reactLogo} />
             <Tile logo={nodeLogo} />
             <Tile logo={mongoLogo} />
             <Tile logo={materialLogo}/>
             <Tile logo={bootstrapLogo}/>
            </Stack>
            
          </Grid>
        </Grid>
      </StyledSkills>
    </>
  )
}
const StyledSkills =styled.div`
  

`
