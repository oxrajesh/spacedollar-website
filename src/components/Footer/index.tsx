import React from "react";
import styled from "styled-components";
import { RowBetween, AutoRow } from "../Row";
import LogoSolid from "../../assets/logo_solid.png";

const FooterWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0px 20px;
  align-items: center;
  background: rgb(0, 0, 0);
`;

const FooterContent = styled(RowBetween)`
  flex-wrap: wrap;
  padding: 40px 0px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

const LogoImage = styled.img`
  height: 32px;
  margin-right: 16px;
`;

const MenuLeft = styled(AutoRow)`
  margin: auto 0;
  text-transform: lowercase;
  padding: 0px;
  font-family: "Montserrat";
  font-weight: 900;
  font-size: 1.4rem;
  max-width: 200px;
  @media (max-width: 600px) {
    max-width: 32px;
    > span {
      display: none;
    }
  }
`;

const MenuRight = styled.ul`
  list-style-position: outside;
  display: block;
  margin: auto 0;
  padding: 0px;
  float: right;
  color: #e5e5e5;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <MenuLeft justify="flex-start" align="center">
          <LogoImage src={LogoSolid} />
        </MenuLeft>
        <MenuRight>
          <p>© 2020 Space Dollar</p>
        </MenuRight>
      </FooterContent>
    </FooterWrapper>
  );
}
