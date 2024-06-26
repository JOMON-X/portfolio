import React from 'react'
import styled from 'styled-components'


export default function Textfield({placeholder,type,fullwidth}) {
  return (
    <>
      <StyledTextField>
        <div className='field'>
        <input type={type} placeholder={placeholder}/>
        </div>
        
      </StyledTextField>
    </>
  )
}
const StyledTextField = styled.div`
  .field input{
    outline: none;
    border: 1px solid rgb(68, 183, 203);
    border-radius: 3px;
   
    width: 100%;
    height:50px;



    background: none;
    color: white;

    background: rgba( 255, 255, 255, 0.2 );
    backdrop-filter: blur( 3px );
    box-shadow: 0px 0px 10px rgb(68, 183, 203);

  }
`