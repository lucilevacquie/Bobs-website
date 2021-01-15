import React from "react"
import styled from "styled-components"
import Spaceship1 from "../assets/spaceship1.svg"

const Image = styled.img`
    position: fixed;
    width: 100px;
    top: 2rem;
`;

const Layer1 = ({myRef}) => {
    return <Image ref={myRef} src={Spaceship1} alt="spaceship 1"/>
}

export default Layer1;