import React from "react";
import styled from "styled-components";
import Button from "./Button";
import PublicIcon from '@mui/icons-material/Public';

export default function Card_n({ C_image, altText, C_heading, C_text }) {
  return (
    <>
      <StyledCard>
        <div className="card">
          <img src={C_image} alt={altText}  className="cardImg"/>
          <div className="cardBody">
            <div className="inter">
            <h2>{C_heading}</h2>
            <p>{C_text}</p>
            </div>
            <div className="btn">
            <Button text={"Visit"} icon={ <PublicIcon sx={{color:"white"}}/>}/> 
           </div>
          </div>
        </div>
      </StyledCard>
    </>
  );
}
const StyledCard = styled.div`
  .card {
    height: 320px;
    width: 220px;
    border-radius: 15px;
    border: 5px solid white;
    overflow: hidden;
    position: relative;
    box-shadow: 0 0 10px rgb(68, 183, 203), 0 0 20px rgb(68, 183, 203);
  }
  .cardImg{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  .cardBody{
    height: 100%;
    width: 100%;
    top: 0;
    right: -100%;
    position: absolute;
    background-color:#1f3d4738;
    backdrop-filter: blur(5px);
    border-radius: 10px;
    color: white;
    
    transition: 1s;
  }
  .card:hover .cardBody{
  right: 0;
  }
  .inter{
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .inter h2,p {
    padding: 10px;
    color:rgb(68, 183, 203) ;
  }
  .inter p{
   font-size: 14px;
  }
  .btn{
    display: flex;
    justify-content: start;
    margin: 10px;
  }
`;
