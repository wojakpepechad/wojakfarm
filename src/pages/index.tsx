import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const MainContainer = styled.div`
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #ffff00;
  font-family: 'DK Frozen Memory', sans-serif;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ButtonLink = styled.a`
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  border: 1px solid #ccc;
  background-color: #eee;
  color: #333;
  text-decoration: none;
  border-radius: 5px;
  font-family: 'DK Frozen Memory', sans-serif;
  &:hover {
    background-color: #ddd;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;


const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  flex-direction: column; // Default to vertical stacking

  @media (min-width: 1024px) { // Adjust breakpoint as needed for larger screens
    flex-direction: row; // Switch to row layout on larger screens
    justify-content: space-between;
    &:nth-child(odd) {
      flex-direction: row-reverse; // Reverse order for alternating layout
    }
  }
`;

const Gif = styled.img`
  width: 100%;
  max-width: 500px; // Ensures GIFs are not too large on bigger screens
  min-width: 300px; // Ensures GIFs have a minimum width
  @media (max-width: 1023px) {
    margin-bottom: 20px; // Adds spacing between stacked items on smaller screens
  }
`;


const WojakDescription = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #ffff80;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  font-size: 22px;
  color: #ffff00;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 15px;
  }
`;

const SocialContainer = styled.div`
  margin-top: 20px;
`;


const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SocialIcon = styled.img`
  width: 32px;
  height: 32px;

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

const LogoText = styled.h1`
  margin-left: 10px;
  font-size: 24px;
  color: #ffff00;
  font-family: 'DK Frozen Memory', sans-serif;
`;

const DescriptionContainer = styled.div`
padding: 20px;
background-color: #333;
border-radius: 8px;
margin-bottom: 20px;
`;

const GifContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`;


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'DK Frozen Memory';
    src: url('/fonts/DKFrozenMemory.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'DK Frozen Memory', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }
`;



// Component for social links
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
        <SocialLink href="https://www.dextools.io/app/es/ether/pair-explorer/0x115f10b50314677f8e50189ff588533873e867e7" target="_blank" rel="noopener noreferrer">
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
          <SocialIcon src="/socials/github-logo.png" alt="GitHub" />
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
      <GlobalStyle />

      <MainContainer>
        <Logo>
          <Image src="/logo.jpg" alt="WojakFarm Logo" height="32" width="32" />
          <LogoText>Wojak.farm</LogoText>
        </Logo>
        <Title>Stake WOJAK, Earn PEPE</Title>
        <SocialLinks />
        <ButtonLink href="https://etherscan.io/address/0x4fd2EC9bDd398f8e522d76eA3704F8dBdc1f23f4" target="_blank" rel="noopener noreferrer">
          View on Etherscan
        </ButtonLink>
        <ButtonLink as="a" href="/info">
          Info
        </ButtonLink>
        <ButtonLink as="a" href="/charts">
          Charts
        </ButtonLink>
        <WojakDescription>
  {/* First Block - Default order */}
  <ContentContainer>
    <DescriptionContainer>
      <p>The internet&apos;s biggest meme is gonna be Ethereum&apos;s hottest meme coin! Doge was funny. Pepe and his gang were cool. But now it&apos;s time for the granddaddy of &apos;em all to make a comeback! Welcome the world wide web&apos;s MOST CHERISHED memetic icon!</p>
    </DescriptionContainer>
    <GifContainer>
      <Gif src="/finger.gif" alt="Finger" />
    </GifContainer>
  </ContentContainer>
  
  {/* Second Block - Reverse order on desktop */}
  <ContentContainer>
    <DescriptionContainer>
      <p>Wojak, also known as &quot;Feels Guy,&quot; is a meme character that originated from the imageboard culture of the internet, particularly 4chan. The character first appeared in 2009 when a Polish user posted a black-and-white MS Paint drawing of a bald man with a somber expression on the German imageboard Krautchan. The drawing quickly gained popularity and was named &quot;Wojak,&quot; which means &quot;warrior&quot; or &quot;soldier&quot; in Polish.</p>
    </DescriptionContainer>
    <GifContainer>
      <Gif src="/frens.gif" alt="Frens" />
    </GifContainer>
  </ContentContainer>

  {/* Third Block - Default order */}
  <ContentContainer>
    <DescriptionContainer>
      <p>Wojak&apos;s simple yet expressive design made it versatile for depicting a wide range of emotions and situations, from sadness and nostalgia to existential dread and alienation. This versatility helped Wojak become a staple in internet meme culture, often used to represent feelings of disillusionment, frustration, and the struggles of modern life. As internet culture evolved, Wojak&apos;s character diversified into various versions, including &quot;Doomer Wojak,&quot; &quot;Boomer Wojak,&quot; and &quot;NPC Wojak,&quot; each symbolizing different subcultures or social archetypes.</p>
    </DescriptionContainer>
    <GifContainer>
      <Gif src="/mask.gif" alt="Mask" />
    </GifContainer>
  </ContentContainer>

  {/* Fourth Block - Reverse order on desktop */}
  <ContentContainer>
    <DescriptionContainer>
      <p><strong>Wojak is your friend!</strong> $WOJAK is an Ethereum project that aims to celebrate everything that&apos;s fun and heartwarming about the legendary meme. Sure, there have been many Wojak tokens before, but trust us... they don&apos;t know Wojak as well as we do! Wojak is all about the feels. He became very popular because the mere sight of him makes people FEEL something. This is what we want to capture with our digital currency.</p>
    </DescriptionContainer>
    <GifContainer>
      <Gif src="/hug.gif" alt="Hug" />
    </GifContainer>
  </ContentContainer>
</WojakDescription>



      </MainContainer>
    </>
  );
}
