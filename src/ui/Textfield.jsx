import React from 'react'
import styled from 'styled-components'


export default function Textfield({placeholder,type}) {
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
    width:200px ;
    height: 30px;
    background: none;
    color: white;

    

   background: rgba( 255, 255, 255, 0.2 );
   backdrop-filter: blur( 3px );
   text-align: center;
   box-shadow: 0px 0px 10px rgb(68, 183, 203);

  }
`