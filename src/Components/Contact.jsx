import React from "react";
import H1 from "./H1";
import styled from "styled-components";
import { Grid, Stack, TextField } from "@mui/material";
import Button from "./Button";

export default function Contact() {
  return (
    <>
      <StyledContact>
        <Stack>
          <Grid container  columnSpacing={5}>
            <Grid item xs={12}>
             <div id="contact" className="con">
              <H1 text={"Contact"}></H1>
             </div>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Grid container rowSpacing={2} columnSpacing={2} className="conbox">
                <Grid item xs={12} className="title" > <H1 text={"Send Message"}></H1></Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} className="name" >
                <TextField margin="none" fullWidth id="outlined-basic" label="Enter your Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} className="email">
                <TextField  fullWidth id="outlined-basic" label="Enter your Email" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} className="subject">
                <TextField fullWidth id="outlined-basic" label="Enter Subject" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} className="message">
                <TextField fullWidth id="outlined-multiline-static" label="Enter your Message" multiline rows={4} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} className="btn">
                 <Button text={"Send Message"} handleclick={()=>alert("Message Sent") }></Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Grid container className="conbox2">
                <Grid item xs={12} className="title"> <H1 text={"Get In Touch"}></H1></Grid>
                <Grid item xs={12}>
                  <h3>Address</h3>
                  <p>Uppoodan house <br />Perinthattiri PO <br /> Kootilangadi <br />Malappuram DIST <br /> Kerala , 676507 </p>
                </Grid>
                <Grid item xs={12}>
                  <h3>Phone Number</h3>
                  <p>+91 9074284063</p>
                </Grid>
                <Grid item xs={12}>
                  <h3>Email</h3>
                  <p> mjouhar1999@gmail.com </p>
                </Grid>
              </Grid>

            </Grid>
          </Grid>
        </Stack>
      </StyledContact>
    </>
  );
}

const StyledContact = styled.div`
  .con {
    text-align: center;

  }

.conbox{
  margin-top: 100px;
  margin-bottom: 100px;
  border: 1px solid white;
  border-radius: 15px;
  padding: 30px ;
  background-color: #646363;
  box-shadow: 0 0 10px rgb(68, 183, 203), 
              0 0 20px rgb(68, 183, 203);
}

.btn{
  display: flex;
  justify-content: center;
  align-items: center;
}

.title{
  display: flex;
  justify-content: center;
  align-items: center;
}

.conbox2{
  margin-top: 100px;
  margin-bottom: 100px;
  border: 1px solid white;
  border-radius: 15px;
  padding: 10px ;
  background-color: #646363;
  box-shadow: 0 0 10px rgb(68, 183, 203), 
              0 0 20px rgb(68, 183, 203);
              text-align: center;
}

h3,p {
  color: white;
}


`;
