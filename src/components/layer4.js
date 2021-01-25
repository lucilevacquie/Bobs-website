import React from "react"
import styled from "styled-components"
import BobSpaceship from "../assets/Bob.svg"

const Container = styled.div`
    width: 100%;
    display: flex;
    
`;

const Image = styled.img`
    position: fixed;
    width: 100%;
    transform: scale(0);
    top: 80px;
    z-index: 4;
    @media only screen and (max-width: 1200px){
        top: 130px;
    }
    @media only screen and (max-width: 1024px){
        top: 190px;
    }
    @media only screen and (max-width: 768px){
        top: 250px;
    }
    @media only screen and (max-width: 480px){
        top: 300px;
    }
`;

const Layer3 = ({myRef}) => {
    return (
        <div>
            <Container>
                <Image ref={myRef} src={BobSpaceship} alt="spaceship 3"/>
            </Container>
        </div>
    )
}

export default Layer3;