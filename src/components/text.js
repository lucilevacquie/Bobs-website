import React from "react";
import styled from "styled-components";
import Github from "../assets/github.png";
import Linkedin from "../assets/linkedin.png";

const Container = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
    color: yellow;
    z-index: 4;
    top: 50px;
    transform: translate3d(0, -300px, 0);
`;

const Name = styled.div`
    font-size: 70px;
    font-family: "Pixeboy";
    @media only screen and (max-width: 768px) {
        font-size: 26px;
    }
    @media only screen and (max-width: 480px) {
        font-size: 40px;
    }
`;

const Role = styled.div`
    font-size: 28px;
    margin-top: -15px;
    color: #46c4ec;
    font-family: "Roboto", sans-serif;
    @media only screen and (max-width: 768px) {
        font-size: 14px;
        margin: 4px;
    }
    @media only screen and (max-width: 480px) {
        font-size: 16px;
        margin: 3px;
    }
`;

const Email = styled.a`
    font-size: 28px;
    text-decoration: none;
    color: yellow;
    font-family: "Roboto", sans-serif;
    @media only screen and (max-width: 768px) {
        font-size: 28px;
    }
    @media only screen and (max-width: 480px) {
        font-size: 16px;
    }
`;

const Logo = styled.img`
    width: 30px;
    padding: 10px;
    @media only screen and (max-width: 480px) {
        width: 20px;
        padding: 5px;
    }
`;

const Text = ({ myRef }) => {
    return (
        <div>
            <Container ref={myRef}>
                <Name>Bob Hall</Name>
                <Role>Full Stack Software Engineer</Role>
                <Email
                    href="mailto:bob@bob-hall.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    bob@bob-hall.com
                </Email>
                <div>
                    <a
                        href="https://www.linkedin.com/in/bob-hall-5503b162/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Logo src={Linkedin} alt="LinkedIn" />
                    </a>
                    <a
                        href="https://github.com/cousinbenson"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Logo src={Github} alt="GitHub" />
                    </a>
                </div>
            </Container>
        </div>
    );
};

export default Text;
