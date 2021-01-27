import React from "react";
import styled from "styled-components";

const Image = styled.img`
    position: fixed;
    width: 100px;
    top: 3rem;
    right: -8rem;
    z-index: 2;
`;

const Layer2 = ({ myRef }) => {
    return (
        <Image ref={myRef} src="assets/RedSpaceship.svg" alt="spaceship 2" />
    );
};

export default Layer2;
