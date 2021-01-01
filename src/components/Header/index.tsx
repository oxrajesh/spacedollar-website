import React, { useState } from "react";
import { Link } from "rebass";
import styled from "styled-components";
import { RowBetween, AutoRow } from "../Row";
import Logo from "../../assets/logo.png";
import CommingSoonModal from "../../components/Modal/ComingSoonModal";

const HeaderWrapper = styled(RowBetween)`
  position: fixed;
  top: 0px;
  padding: 20px 0;
  border: 0px;
  z-index: 1;
  background: #e5e5e5;
  width: 100%;
`;

const LogoImage = styled.img`
  height: 32px;
  margin-right: 16px;
`;

const MenuLeft = styled(AutoRow)`
  margin: auto 20px;
  padding: 0px;
  font-family: "Montserrat";
  font-weight: 900;
  font-size: 1.4rem;
  max-width: 210px;
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
  margin: auto 20px;
  text-transform: uppercase;
  padding: 0px;
  float: right;
  width: 350px;
`;

const MenuItem = styled(Link)`
  float: right;
  cursor: pointer;
  padding: 12px 16px;
  font-size: 0.875rem;
  text-decoration: none;
  color: #000;
  transition: 0.3s ease;
  :hover {
    font-weight: 700;
  }
`;

const MenuButton = styled(Link)`
  float: right;
  cursor: pointer;
  padding: 12px 16px;
  font-size: 0.875rem;
  background: #5700ff;
  color: #e5e5e5;
  font-weight: 700;
  border-radius: 8px;
  text-decoration: none;
  transition: 0.3s ease;
  :hover {
    box-shadow: 0 4px 19px rgba(87, 0, 255, 0.47);
    transform: translateY(-2px);
  }
`;

export default function Header() {
  const [showCommingSoonModal, setShowCommingSoonModal] = useState(false);

  return (
    <HeaderWrapper>
      <MenuLeft justify="flex-start" align="center">
        <LogoImage src={Logo} />
        <span>Space Dollar</span>
      </MenuLeft>
      <MenuRight>
        <MenuButton href="https://eth.spacedollar.finance/">
          Launch App
        </MenuButton>
        <MenuItem href="https://medium.com/space-dollar/" target="_blank">
          Docs
        </MenuItem>
      </MenuRight>

      <CommingSoonModal
        isOpen={showCommingSoonModal}
        onDismiss={() => setShowCommingSoonModal(false)}
      />
    </HeaderWrapper>
  );
}
