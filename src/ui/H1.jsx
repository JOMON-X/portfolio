import React from "react";
import styled from "styled-components";

export default function H1({ text }) {
  return (
    <>
      <StyledHeading>
        {" "}
        <h1>{text}</h1>{" "}
      </StyledHeading>
    </>
  );
}

const StyledHeading = styled.div`
  color: rgb(68, 183, 203);
  text-shadow: 0 0 10px rgb(68, 183, 203);
`;
