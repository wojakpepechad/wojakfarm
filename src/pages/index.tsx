import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

// Styled components
const Header = styled.header`
  background-color: #333;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
`;

const MainContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

const AddLink = styled.a`
  display: block;
  font-size: 20px;
  margin-bottom: 20px;
  color: blue;
  text-decoration: underline;
  cursor: pointer;
`;

const SocialContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const SocialLink = styled.a`
  cursor: pointer;
`;

const SocialIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const ButtonLink = styled.a`
  display: inline-block;
  padding: 10px 15px;
  margin-bottom: 20px;
  background-color: #yellow;
  color: white;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
	color: black;
    background-color: #ffff00;
  }
`;

const SocialLinks = () => {
  return (
    <SocialContainer>
      <SocialRow>
        <SocialLink href="https://twitter.com/wojakfarm" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="/socials/x-logo.png" alt="Twitter" />
        </SocialLink>
        <SocialLink href="https://t.me/firstwojakdeployed" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="/socials/telegram-logo.png" alt="Telegram" />
        </SocialLink>
        <SocialLink href="https://www.dextools.io/app/es/ether/pair-explorer/0x20267b3c4148446f2647af96d320db88c383537f" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="/socials/dextools-logo.png" alt="Dextools" />
        </SocialLink>
      </SocialRow>
      <SocialRow>
        <SocialLink href="https://app.uniswap.org/#/swap?outputCurrency=0x4fd2EC9bDd398f8e522d76eA3704F8dBdc1f23f4" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="/socials/uniswap-logo.png" alt="Uniswap" />
        </SocialLink>
        <SocialLink href="https://the-og-pepe.medium.com/" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="/socials/medium-logo.png" alt="Medium" />
        </SocialLink>
        <SocialLink href="https://github.com/theogpepe/" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="/socials/github-logo.png" alt="Medium" />
        </SocialLink>
      </SocialRow>
    </SocialContainer>
  );
};
export default function Home() {
	return (
	  <>
		<Head>
		  <title>Wojak.farm</title>
		  <meta name="description" content="The home of the wojak.farm community, the first Wojak token on Ethereum" />
		  <meta name="viewport" content="width=device-width, initial-scale=1" />
		  <link rel="icon" href="/favicon.ico" />
		</Head>
		<MainContainer>
		  <Title>
			<Logo>
			  <Image src="/logo.jpg" alt="WojakFarm Logo" height="32" width="32" />
			  <LogoText>Wojak.farm - WOJAK</LogoText>
			</Logo>
		  </Title>
		  <ButtonLink href="https://etherscan.io/address/0x4fd2EC9bDd398f8e522d76eA3704F8dBdc1f23f4" target="_blank" rel="noopener noreferrer">
          View on Etherscan
        </ButtonLink>
        <ButtonLink href="https://swap.ogpepe.io/#/add/ETH/0x4fd2EC9bDd398f8e522d76eA3704F8dBdc1f23f4" target="_blank" rel="noopener noreferrer">
          Add ETH/WOJAK and ETH/PEPE to start preparing for the farming
        </ButtonLink>
        <ButtonLink as="a" href="/info">
          Check out the full information here
        </ButtonLink>
		  <SocialLinks />
		</MainContainer>
	  </>
	);
  }