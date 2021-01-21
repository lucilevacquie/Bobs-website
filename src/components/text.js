import React from "react"
import styled from "styled-components"
import Github from "../assets/github.png"
import Linkedin from "../assets/linkedin.png"

const Container = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
    top: -24%;
    color: yellow;
`;

const Name = styled.div`
    font-size: 24px;
`;

const Role = styled.div`
    font-size: 20px;
`;

const Email = styled.a`
    font-size: 18px;
    text-decoration: none;
    color: yellow;
`;

const Links = styled.div``;

const Logo = styled.img`
    width: 30px;
    margin: 5px;
`;

const Text = ({myRef}) => {
    return (
        <Container ref={myRef}>
            <Name>Bob Hall</Name>
            <Role>Full Stack Software Engineer</Role>
            <Email href="mailto:bob@bob-hall.com" target="_blank" rel="noreferrer">bob@bob-hall.com</Email>
            <Links>
                <a href="https://www.linkedin.com/in/bob-hall-5503b162/" target="_blank" rel="noreferrer">
                    <Logo src={Linkedin} alt="LinkedIn"/>
                </a>
                <a href="https://github.com/cousinbenson" target="_blank" rel="noreferrer">
                    <Logo src={Github} alt="GitHub"/>
                </a>
            </Links>
        </Container>
    )
}

export default Text;