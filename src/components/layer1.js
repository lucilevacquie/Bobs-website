import React from "react";
import styled from "styled-components";

const Image = styled.img`
    position: fixed;
    width: 100px;
    top: 2rem;
    left: -7rem;
    z-index: 1;
`;

const Layer1 = ({ myRef }) => {
    return (
        <Image ref={myRef} src="assets/GreenSpaceship.svg" alt="spaceship 1" />
    );
};

export default Layer1;
