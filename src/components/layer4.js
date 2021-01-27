import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Image = styled.img`
    position: fixed;
    width: 850px;
    transform: scale(0);
    top: 200px;
    z-index: 4;
    @media only screen and (max-width: 1200px) {
        top: 200px;
        width: 740px;
    }
    @media only screen and (max-width: 1024px) {
        top: 230px;
        width: 630px;
    }
    @media only screen and (max-width: 768px) {
        top: 200px;
        width: 550px;
    }
    @media only screen and (max-width: 480px) {
        top: 230px;
        width: 340px;
    }
`;

const Layer3 = ({ myRef }) => {
    return (
        <div>
            <Container>
                <Image ref={myRef} src="assets/Bob.svg" alt="spaceship 3" />
            </Container>
        </div>
    );
};

export default Layer3;
