import React from "react";
import styled from "styled-components";
import { Grid,TextField } from "@mui/material";
import H1 from "../ui/H1";
import Button from "../ui/Button";
import SendIcon from '@mui/icons-material/Send';


export default function Contact() {
  return (
    <>
      <StyledContact>
       
          <Grid container rowGap={10}>
            <Grid item xs={12}>
             <div id="contact" className="con">
              <H1 text={"Contact"}></H1>
             </div>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Grid container rowGap={2} columnGap={2} className="conbox">
                <Grid  xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"} >
                  <H1 text={"Send Message"}/>
                </Grid>
                <Grid  xs={12} sm={12} md={6} lg={6}  >
                <TextField margin="none" fullWidth id="outlined-basic" label="Enter your Name" variant="outlined" color="" />
                </Grid>
                <Grid  xs={12} sm={12} md={6} lg={6} >
                <TextField  fullWidth id="outlined-basic" label="Enter your Email" variant="outlined" />
                </Grid>
                <Grid  xs={12} sm={12} md={12} lg={12} >
                <TextField fullWidth id="outlined-basic" label="Enter Subject" variant="outlined" />
                </Grid>
                <Grid  xs={12} sm={12} md={12} lg={12} >
                <TextField fullWidth id="outlined-multiline-static" label="Enter your Message" multiline rows={4} />
                </Grid>
                <Grid  xs={12} sm={12} md={12} lg={12} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                 <Button text={"Send Message"} handleclick={()=>alert("Message Sent") } icon={ <SendIcon sx={{color:"white"}}/> }/>
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

      </StyledContact>
    </>
  );
}

const StyledContact = styled.div`
  .con {
    text-align: center;

  }

.conbox{
  border: 1px solid rgb(68, 183, 203);
  border-radius: 15px;
  padding: 30px ;
  background-color: #646363;
  box-shadow: 0 0 10px rgb(68, 183, 203), 
              0 0 20px rgb(68, 183, 203);
}


.conbox2{
  
  border: 1px solid rgb(68, 183, 203);
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