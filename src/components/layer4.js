import React from "react"
import styled from "styled-components"
import BobSpaceship from "../assets/BobsSpaceship.svg"

const Container = styled.div`
    width: 100%;
    display: flex;
`;

const Image = styled.img`
    position: fixed;
    width: 100%;
    z-index:1;
    transform: scale(0);
`;

const Layer3 = ({myRef}) => {
    return (
        <Container>
            <Image ref={myRef} src={BobSpaceship} alt="spaceship 3"/>
        </Container>
    )
}

export default Layer3;