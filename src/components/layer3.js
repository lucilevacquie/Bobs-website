import React from "react"
import styled from "styled-components"
import Spaceship3 from "../assets/SpaceshipYellow.svg"

const Image = styled.img`
    position: fixed;
    width: 100px;
    top: -5rem;
    left: -2rem;
    z-index: 3;
`;

const Layer3 = ({myRef}) => {
    return <Image ref={myRef} src={Spaceship3} alt="spaceship 3"/>
}

export default Layer3;