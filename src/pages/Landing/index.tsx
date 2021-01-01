import React, { useState } from "react";
import { Link, Box } from "rebass";
import styled from "styled-components";
import { AutoColumn } from "../../components/Column";
import { AutoRow, RowBetween } from "../../components/Row";
import {
  FaTwitter,
  FaGithub,
  FaMediumM,
  FaTelegramPlane,
  FaRocket,
  FaRegLightbulb,
} from "react-icons/fa";
import LogoSolid from "../../assets/logo_solid.png";
import CommingSoonModal from "../../components/Modal/ComingSoonModal";

const Wrapper = styled(AutoColumn)``;

const PrimarySection = styled(RowBetween)<{ paddingTop? }>`
  max-width: 1280px;
  padding: ${({ paddingTop }) => (paddingTop ? paddingTop : "150px")} 20px 80px
    20px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    padding: ${({ paddingTop }) => (paddingTop ? paddingTop : "0px")} 20px 80px
      20px;
  }
`;

const PrimarySectionLeft = styled(AutoColumn)`
  width: 100%;
`;

const SpaceHeader = styled.div`
  font-size: 7.5rem;
  font-family: "Montserrat";
  font-weight: 900;
  text-transform: uppercase;
  @media (max-width: 1024px) {
    padding-top: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 3.5rem;
  }
`;

const SpaceSubHeader = styled.p`
  font-size: 1.2rem;
`;

const MenuButton = styled(Link)<{ dark? }>`
  width: 200px;
  padding: 16px 24px;
  background: ${({ dark }) => (dark ? "#000" : "#e5e5e5")};
  color: ${({ dark }) => (dark ? "#e5e5e5" : "#000")};
  border: 1px solid #000;
  font-weight: 700;
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  transition: 0.3s ease;
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    box-shadow: 0 4px 19px rgba(87, 0, 255, 0.47);
    transform: translateY(-2px);
    border-color: #5700ff;
    background: #5700ff;
    color: #e5e5e5;
  }
`;

const ImagePreview = styled.img`
  width: calc(100% - 60px);
  z-index: -1;
  @media (max-width: 1024px) {
    position: absolute;
    top: 20px;
  }
`;

const CommunitySection = styled(AutoRow)`
  background: linear-gradient(-140deg, #fff 0%, #e5e5e5 100%);
  height: 190px;
`;

const CommunityIcon = styled(Link)`
  padding: 0 16px;
  cursor: pointer;
  color: #000;
  :hover {
    color: #5700ff;
  }
`;

const ConceptSection = styled(RowBetween)`
  max-width: 1280px;
  padding: 60px 40px;
  margin: 40px auto;
  background: #5700ff;
  border-radius: 16px;
  color: #e5e5e5;
  @media (max-width: 1024px) {
    padding: 60px 40px;
  }
`;

const ConceptSectionLeft = styled(AutoColumn)`
  width: 50%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const HowWorkSection = styled(AutoColumn)`
  max-width: 1280px;
  padding: 40px 20px 40px 20px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    padding: 40px 20px 40px 20px;
  }
`;

const Divider = styled.div`
  position: relative;
  margin-top: 0px;
  margin-bottom: 60px;
  height: 1px;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 5%;
    right: 5%;
    width: 90%;
    height: 1px;
    background-image: linear-gradient(to right, transparent, #aaa, transparent);
  }
  :after {
    content: "";
    position: absolute;
    z-index: 1;
    top: -7px;
    left: calc(50% - 7px);
    width: 14px;
    height: 14px;
    transform: rotate(45deg);
    background-color: #e5e5e5;
    border-bottom: 1px solid #aaa;
    border-right: 1px solid #aaa;
  }
`;

const LogoImage = styled.img`
  width: 96px;
  margin-bottom: 32px;
`;

const LogoImageDecor = styled.img`
  width: 200px;
  transform: rotate(20deg);
  opacity: 0.38;
  @media (max-width: 768px) {
    display: none;
  }
`;

const CodeBlock = styled.div`
  padding: 10px;
  background: #000;
  border-radius: 10px;
  color: #fff;
  margin: 20px 0;
  text-align: left;
  > ul {
    padding: 10px 20px;
    margin-left: 20px;
    margin-bottom: 0px;
    margin-top: 0;
    list-style: circle inside;
    > li {
      font-size: 1rem;
      margin: 10px 0px;
    }
  }
`;

const Red = styled.span`
  color: #d700ff;
  font-weight: 700;
`;

const Blue = styled.span`
  color: #0029ff;
  font-weight: 700;
`;

const MenuButtonRow = styled(MenuButton)`
  margin: 0 8px !important;
  @media (max-width: 512px) {
    margin: 8px 8px !important;
  }
`;

export default function Landing() {
  const [showCommingSoonModal, setShowCommingSoonModal] = useState(false);

  return (
    <Wrapper justify="center">
      <PrimarySection>
        <PrimarySectionLeft>
          <SpaceHeader>Space Dollar</SpaceHeader>
          <SpaceSubHeader>
            The first multi-chain algorithmic stablecoin on Binance Smart Chain
            & Ethereum.
          </SpaceSubHeader>
          <Box marginTop={24} />
          <MenuButton href="https://eth.spacedollar.finance/" dark>
            Launch App <FaRocket color="#e5e5e5" style={{ marginLeft: 16 }} />
          </MenuButton>
          <Box marginTop={16} />
          <MenuButton href="https://medium.com/space-dollar/" target="_blank">
            Learn More <FaRegLightbulb style={{ marginLeft: 16 }} />
          </MenuButton>
        </PrimarySectionLeft>

        <ImagePreview src="https://media4.giphy.com/media/c3OZsDoaz7kD6/giphy.gif" />
      </PrimarySection>

      <CommunitySection justify="center">
        <CommunityIcon href="https://twitter.com/space_dollar/" target="_blank">
          <FaTwitter size={42} />
        </CommunityIcon>
        <CommunityIcon href="https://github.com/spadsquad/">
          <FaGithub size={42} />
        </CommunityIcon>
        <CommunityIcon href="https://medium.com/space-dollar/" target="_blank">
          <FaMediumM size={42} />
        </CommunityIcon>
        <CommunityIcon href="https://t.me/spacedollar" target="_blank">
          <FaTelegramPlane size={42} />
        </CommunityIcon>
      </CommunitySection>

      <ConceptSection>
        <ConceptSectionLeft>
          <LogoImage src={LogoSolid} />
          <h2>Space Dollar (SPAD) is an algorithmic elastic stablecoin</h2>
          <p>
            SPAD uses an algorithmic approach for maintaining price stability
            around a 1 USDC target. This approach is without any
            collateralization but relies on a tuned incentivization mechanism of
            rewarding actors who promote stability to the protocol.
          </p>
        </ConceptSectionLeft>
        <LogoImageDecor src={LogoSolid} />
      </ConceptSection>

      <HowWorkSection>
        <Divider />

        <h2>How does the protocol work?</h2>
        <p>
          The Space Dollar protocol uses an algorithm and incentivization for
          maintaining price stability. This means the number of SPAD tokens in
          circulation supply can be increased or decreased based on token price:
        </p>

        <CodeBlock>
          <ul>
            <li>
              <code>
                When Price {"> $1"} supply <Red>increase</Red> with algorithmic
              </code>
            </li>
            <li>
              <code>
                When Price {"< $1"} supply <Blue>decrease</Blue> with
                incentivization
              </code>
            </li>
          </ul>
        </CodeBlock>

        <p>
          supply will increase when SPAD demand is growing therefore the price
          will exceed $1. The protocol will adjust supply to stabilize price
          around $1 target by <Red>increasing</Red> the supply and distributing
          SPAD, LP staker or using Discount Coupon Redeemer.When SPAD demand is 
          <Blue> decreasing</Blue>. The price will be below $1 and supply need to
          be decreased. The protocol will use intensivization mechanism to
          burned SPAD with Discount Coupon offering. Those coupons can be
          redeemed when price exceed $1 again.
        </p>

        <Divider style={{ marginTop: 60 }} />

        <AutoRow justify="center" marginTop={30} marginBottom={120}>
          <MenuButtonRow href="https://eth.spacedollar.finance/" dark>
            Launch App <FaRocket color="#e5e5e5" style={{ marginLeft: 16 }} />
          </MenuButtonRow>
          <MenuButtonRow
            href="https://medium.com/space-dollar/"
            target="_blank"
          >
            Learn More <FaRegLightbulb style={{ marginLeft: 16 }} />
          </MenuButtonRow>
        </AutoRow>
      </HowWorkSection>

      <CommingSoonModal
        isOpen={showCommingSoonModal}
        onDismiss={() => setShowCommingSoonModal(false)}
      />
    </Wrapper>
  );
}
