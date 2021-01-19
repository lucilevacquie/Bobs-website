import React from "react"
import styled from "styled-components"
import Github from "../assets/github.png"
import Linkedin from "../assets/linkedin.png"

const Container = styled.div`
    position: fixed;
    width: 100%;
    top: -25%;
    color: yellow;
`;

const Name = styled.div`
    font-size: 24px;
    text-align: center;
`;

const Role = styled.div`
    font-size: 20px;
    text-align: center;
`;

const Email = styled.div`
    font-size: 18px;
    text-align: center;
`;

const Links = styled.div`
    text-align: center;
`;

const Logo = styled.img`
    width: 30px;
    margin: 5px;
`;

const Text = ({myRef}) => {
    return (
        <Container ref={myRef}>
            <Name>Bob Hall</Name>
            <Role>Senior Software Engineer</Role>
            <Email>bob.hall@gmail.com</Email>
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