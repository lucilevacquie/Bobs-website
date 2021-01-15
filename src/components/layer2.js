import React from "react"
import styled from "styled-components"
import Spaceship2 from "../assets/spaceship2.svg"

const Image = styled.img`
    position: fixed;
    width: 100px;
`;

const Layer2 = ({myRef}) => {
    return <Image ref={myRef} src={Spaceship2} alt="spaceship 2"/>
}

export default Layer2;