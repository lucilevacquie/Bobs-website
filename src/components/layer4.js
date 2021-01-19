import React from "react"
import styled from "styled-components"
import BobSpaceship from "../assets/bob.svg"

const Image = styled.img`
    position: fixed;
    width: 130px;
    top: 25%;
    left: 43%;
`;

const Layer3 = ({myRef}) => {
    return <Image ref={myRef} src={BobSpaceship} alt="spaceship 3"/>
}

export default Layer3;