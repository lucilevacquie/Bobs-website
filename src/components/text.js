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
  top: -25%;
  color: yellow;
  z-index: 4;
  @media only screen and (max-width: 768px) {
    top: -24%;
  }
  @media only screen and (max-width: 480px) {
    top: -25%;
  }
`;

const Name = styled.div`
  font-size: 3rem;
  font-family: "Pixeboy";
  @media only screen and (max-width: 768px) {
    font-size: 26px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const Role = styled.div`
  font-size: 18px;
  margin: 5px;
  color: #46c4ec;
  font-family: "Roboto", sans-serif;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
    margin: 4px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 10px;
    margin: 3px;
  }
`;

const Email = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: yellow;
  font-family: "Roboto", sans-serif;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 10px;
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
    <Container ref={myRef}>
      <Name>Bob Hall</Name>
      <Role>Full Stack Software Engineer</Role>
      <Email href="mailto:bob@bob-hall.com" target="_blank" rel="noreferrer">
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
  );
};

export default Text;
