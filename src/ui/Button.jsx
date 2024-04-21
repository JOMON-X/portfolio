import React from 'react'
import styled from 'styled-components'




export default function Button({text,handleclick,icon}) {
  return (
    <>
  <StyledButton> 
    <div className='main' onClick={handleclick}>
      <a href="">{text}</a><div className='icl'>{icon}</div></div>
    </StyledButton>
    </>
  )
}

const StyledButton = styled.div`
  
 .main a {
    font-size: 16px;
    font-weight: 500;
    color: white;
    text-decoration: none;
    cursor: pointer;
    

 
}

.main{
  width: fit-content;
    border-radius: 50px !important;
    background: rgba(0,0,0,0);
    border: 2px solid rgb(68, 183, 203);
    padding: 9px 25px;
    display: flex;
    justify-content: space-between;
    
}
.main:hover{
    background-color: rgb(68, 183, 203);
    box-shadow: 0 0 10px rgb(68, 183, 203),
                 0 0 20px rgb(68, 183, 203),
                 0 0 30px rgb(68, 183, 203);
                
    transition: all 0.4s ease-in-out 0ms;

}
.icl{
  margin-left: 10px;
}

`;
