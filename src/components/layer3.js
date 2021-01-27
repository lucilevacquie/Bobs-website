import React from "react";
import styled from "styled-components";

const Image = styled.img`
    position: fixed;
    width: 100px;
    top: -6rem;
    left: -2rem;
    z-index: 3;
`;

const Layer3 = ({ myRef }) => {
    return (
        <Image ref={myRef} src="assets/SpaceshipYellow.svg" alt="spaceship 3" />
    );
};

export default Layer3;
