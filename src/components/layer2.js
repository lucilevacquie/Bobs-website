import React from "react";
import styled from "styled-components";
import Spaceship2 from "../assets/RedSpaceship.svg";

const Image = styled.img`
    position: fixed;
    width: 100px;
    top: 3rem;
    right: -8rem;
    z-index: 2;
`;

const Layer2 = ({ myRef }) => {
    return <Image ref={myRef} src={Spaceship2} alt="spaceship 2" />;
};

export default Layer2;
