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
    z-index: 4;
`;

const Name = styled.div`
    font-size: 20px;
    @media only screen and (max-width: 480px){
        font-size: 18px;
    }
`;

const Role = styled.div`
    font-size: 18px;
    margin: 5px;
    @media only screen and (max-width: 768px){
        font-size: 14px;
        margin: 4px;
    }
    @media only screen and (max-width: 480px){
        font-size: 10px;
        margin: 3px;
    }
`;

const Email = styled.a`
    font-size: 16px;
    text-decoration: none;
    color: yellow;
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
    @media only screen and (max-width: 480px){
        font-size: 10px;
    }
`;

const Links = styled.div``;

const Logo = styled.img`
    width: 20px;
    margin: 0 2.5px;
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