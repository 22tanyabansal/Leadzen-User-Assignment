import React, { useState } from "react";
import styled from "styled-components";
function Button({ hideDetails }) {
    const [show, setShow] = useState(false);
    return (
        <StyledButton
            onClick={() => {
                setShow(!show);
                hideDetails(!show);
            }}
        >{`${show ? "Hide" : "View"} Details`}
        </StyledButton>
    );
}

const StyledButton = styled.button`
  background: #f44336;
  border: 1px solid black;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  @media only screen and (max-width: 800px) {
    font-size: 0.8rem;
}
`;

export default Button;
