import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Layout from '@/components/Layout';
import { theme } from '@/styles/theme';

const CONTRACT = '0x4fd2EC9bDd398f8e522d76eA3704F8dBdc1f23f4';
const SUPPLY = 11000;

function useTokenPrice() {
  const [price, setPrice] = useState<number | null>(null);

  useEffect(() => {
    const fetchPrice = () =>
      fetch(`https://api.geckoterminal.com/api/v2/simple/networks/eth/token_price/${CONTRACT}`)
        .then((r) => r.json())
        .then((d) => {
          const raw = d?.data?.attributes?.token_prices?.[CONTRACT.toLowerCase()];
          if (raw) setPrice(parseFloat(raw));
        })
        .catch(() => {});
    fetchPrice();
    const id = setInterval(fetchPrice, 60000);
    return () => clearInterval(id);
  }, []);

  return price;
}

function formatUsd(n: number) {
  if (n >= 1) return '$' + n.toFixed(2);
  return '$' + n.toPrecision(4);
}

function formatMcap(n: number) {
  if (n >= 1_000_000) return '$' + (n / 1_000_000).toFixed(2) + 'M';
  if (n >= 1_000) return '$' + (n / 1_000).toFixed(1) + 'K';
  return '$' + n.toFixed(0);
}

// ─── Animations ──────────────────────────────────────────
const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(245, 197, 24, 0.1); }
  50% { box-shadow: 0 0 40px rgba(245, 197, 24, 0.2); }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// ─── Hero ────────────────────────────────────────────────
const HeroSection = styled.section`
  text-align: center;
  padding: 48px 0 32px;
`;

const HeroTitle = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: 56px;
  color: ${theme.colors.wojakYellow};
  margin-bottom: 12px;
  line-height: 1.1;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 36px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 20px;
  color: ${theme.colors.textSecondary};
  max-width: 520px;
  margin: 0 auto 28px;
  line-height: 1.5;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 16px;
  }
`;

const HeroTagline = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 24px;
  background: linear-gradient(135deg, ${theme.colors.wojakYellow}, ${theme.colors.wojakGreen}, ${theme.colors.wojakBlue});
  background-size: 200% 200%;
  animation: ${gradientShift} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 32px;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 18px;
  }
`;

// ─── Buttons ─────────────────────────────────────────────
const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

const Button = styled.a<{ $variant?: 'primary' | 'secondary' }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: ${theme.radii.md};
  font-family: ${theme.fonts.heading};
  font-size: 15px;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.2s;

  ${(p) =>
    p.$variant === 'primary'
      ? `
    background: ${theme.colors.wojakYellow};
    color: ${theme.colors.bg};
    border: 1px solid ${theme.colors.wojakYellow};

    &:hover {
      background: ${theme.colors.wojakGold};
      box-shadow: ${theme.shadows.glow};
      transform: translateY(-1px);
    }
  `
      : `
    background: transparent;
    color: ${theme.colors.textPrimary};
    border: 1px solid ${theme.colors.border};

    &:hover {
      border-color: ${theme.colors.wojakYellow};
      color: ${theme.colors.wojakYellow};
      transform: translateY(-1px);
    }
  `}
`;

// ─── Social Links ────────────────────────────────────────
const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 24px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: ${theme.radii.md};
  background: ${theme.colors.bgCard};
  border: 1px solid ${theme.colors.border};
  transition: all 0.2s;

  ${SocialLink}:hover & {
    border-color: ${theme.colors.wojakYellow};
    background: rgba(245, 197, 24, 0.08);
    box-shadow: ${theme.shadows.glow};
  }

  img {
    width: 20px;
    height: 20px;
    opacity: 0.8;
    transition: opacity 0.2s;
  }

  ${SocialLink}:hover & img {
    opacity: 1;
  }
`;

const SocialLabel = styled.span`
  font-size: 9px;
  color: ${theme.colors.textMuted};
  letter-spacing: 0.5px;
  text-transform: uppercase;
  position: absolute;
  bottom: -14px;
  left: 50%;
  transform: translateX(-50%);
`;

const SocialLinkWrapper = styled.div`
  position: relative;
  padding-bottom: 14px;
`;

// ─── Content Cards ───────────────────────────────────────
const StorySection = styled.section`
  margin-top: 16px;
`;

const SectionTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: 32px;
  color: ${theme.colors.wojakYellow};
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 24px;
    margin-bottom: 28px;
  }
`;

const ContentCard = styled.div<{ $reverse?: boolean }>`
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 32px;
  margin-bottom: 24px;
  background: ${theme.colors.bgCard};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.lg};
  transition: all 0.3s;
  flex-direction: ${(p) => (p.$reverse ? 'row-reverse' : 'row')};

  &:hover {
    border-color: ${theme.colors.borderHover};
    box-shadow: ${theme.shadows.cardHover};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    padding: 24px;
    gap: 20px;
  }
`;

const CardText = styled.div`
  flex: 1;
`;

const CardTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 20px;
  color: ${theme.colors.wojakYellow};
  margin-bottom: 12px;
`;

const CardDescription = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: ${theme.colors.textSecondary};
`;

const GifWrapper = styled.div`
  flex-shrink: 0;
  max-width: 320px;
  border-radius: ${theme.radii.md};
  overflow: hidden;
  animation: ${float} 4s ease-in-out infinite;

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    width: 100%;
    max-width: 300px;
  }
`;

// ─── Price Ticker ────────────────────────────────────────
const TickerBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin: 16px 0 16px;
  flex-wrap: wrap;
`;

const TickerItem = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 12px 24px;
  background: ${theme.colors.bgCard};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.md};

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 10px 16px;
  }
`;

const TickerLabel = styled.span`
  font-family: ${theme.fonts.mono};
  font-size: 12px;
  color: ${theme.colors.textMuted};
  text-transform: uppercase;
`;

const TickerValue = styled.span`
  font-family: ${theme.fonts.mono};
  font-size: 22px;
  font-weight: 700;
  color: ${theme.colors.wojakGreen};
  text-shadow: 0 0 8px rgba(74, 222, 128, 0.3);

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 18px;
  }
`;

const TickerLoading = styled.span`
  font-family: ${theme.fonts.mono};
  font-size: 22px;
  font-weight: 700;
  color: ${theme.colors.textMuted};
  animation: ${blink} 1.2s ease-in-out infinite;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 18px;
  }
`;

// ─── Stats Bar ───────────────────────────────────────────
const StatsBar = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin: 0 0 40px;
  animation: ${glowPulse} 3s ease-in-out infinite;
  border-radius: ${theme.radii.lg};
  padding: 24px;
  background: ${theme.colors.bgCard};
  border: 1px solid ${theme.colors.border};

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 26px;
  color: ${theme.colors.wojakYellow};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 20px;
  }
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: ${theme.colors.textMuted};
  margin-top: 4px;
`;

// ─── Data ────────────────────────────────────────────────
const socials = [
  { href: 'https://twitter.com/wojakfarm', icon: '/socials/x-logo.svg', alt: 'Twitter', label: '' },
  { href: 'https://t.me/firstwojakdeployed', icon: '/socials/telegram-logo.svg', alt: 'Telegram', label: '' },
  { href: 'https://www.dextools.io/app/ether/pair-explorer/0x20267b3c4148446f2647af96d320db88c383537f', icon: '/socials/dextools-logo.svg', alt: 'Dextools v2', label: 'v2' },
  { href: 'https://www.dextools.io/app/ether/pair-explorer/0x5c7f29e07a9af6cbb4bccbe8fe060067994f28a9', icon: '/socials/dextools-logo.svg', alt: 'Dextools v3', label: 'v3' },
  { href: 'https://app.uniswap.org/#/swap?outputCurrency=0x4fd2EC9bDd398f8e522d76eA3704F8dBdc1f23f4', icon: '/socials/uniswap-logo.svg', alt: 'Uniswap', label: '' },
  { href: 'https://github.com/theogpepe/', icon: '/socials/github-logo.svg', alt: 'GitHub', label: '' },
];

const storyCards = [
  {
    title: 'yeah, that guy',
    text: "you know him. you've seen him a million times. the bald dude with the sad eyes who shows up every time the market dumps. well guess what, he's got his own coin now. doge had its run. pepe had his moment. now it's wojak's turn and honestly? it was always his turn.",
    gif: '/finger.gif',
    alt: 'Finger',
  },
  {
    title: 'where he came from',
    text: "some polish dude drew a sad bald man in MS Paint back in 2009 and posted it on a german imageboard. that's it. that's the origin story. no corporate boardroom, no marketing team. just a guy, a feeling, and microsoft paint. the name \"wojak\" means \"warrior\" in polish which is honestly perfect because this guy has survived everything the internet has thrown at him.",
    gif: '/frens.gif',
    alt: 'Frens',
  },
  {
    title: 'he became everyone',
    text: "the thing about wojak is he's literally all of us. doomer wojak doom-scrolling at 3am. boomer wojak grilling. NPC wojak. bloomer wojak having a good day for once. there's a wojak for every vibe because the whole point was always about feelings. that's why he stuck around while other memes died.",
    gif: '/mask.gif',
    alt: 'Mask',
  },
  {
    title: 'the FIRST. the REAL one.',
    text: "if you're holding another wojak, you're holding a knockoff. $WOJAK started here. first on ethereum. first anywhere. not a fork, not a copy, not a \"v2\". the one that came before all of them. one day you'll tell people you were here when the original was still cheap. this is that moment.",
    gif: '/hug.gif',
    alt: 'Hug',
  },
];

// ─── Component ───────────────────────────────────────────
export default function Home() {
  const price = useTokenPrice();
  const mcap = price ? price * SUPPLY : null;

  return (
    <Layout title="Wojak.farm - The First $WOJAK Ever">
      <HeroSection>
        <HeroTitle>wojak.farm</HeroTitle>
        <HeroSubtitle>
          the first token with the $WOJAK ticker. ever. on any chain. everyone else came after.
        </HeroSubtitle>
        <HeroTagline>The First $WOJAK Ever Created</HeroTagline>

        <ButtonRow>
          <Button
            $variant="primary"
            href="https://app.uniswap.org/#/swap?outputCurrency=0x4fd2EC9bDd398f8e522d76eA3704F8dBdc1f23f4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy $WOJAK
          </Button>
          <Button
            href="https://etherscan.io/address/0x4fd2EC9bDd398f8e522d76eA3704F8dBdc1f23f4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contract
          </Button>
          <Button href="/info">
            Proof
          </Button>
        </ButtonRow>

        <SocialRow>
          {socials.map((s) => (
            <SocialLinkWrapper key={s.alt}>
              <SocialLink href={s.href} target="_blank" rel="noopener noreferrer">
                <SocialIcon>
                  <img src={s.icon} alt={s.alt} />
                </SocialIcon>
              </SocialLink>
              {s.label && <SocialLabel>{s.label}</SocialLabel>}
            </SocialLinkWrapper>
          ))}
        </SocialRow>
      </HeroSection>

      <TickerBar>
        <TickerItem>
          <TickerLabel>WOJAK/USD</TickerLabel>
          {price ? <TickerValue>{formatUsd(price)}</TickerValue> : <TickerLoading>loading...</TickerLoading>}
        </TickerItem>
        <TickerItem>
          <TickerLabel>MCAP</TickerLabel>
          {mcap ? <TickerValue>{formatMcap(mcap)}</TickerValue> : <TickerLoading>loading...</TickerLoading>}
        </TickerItem>
        <TickerItem>
          <TickerLabel>SUPPLY</TickerLabel>
          <TickerValue>11,000</TickerValue>
        </TickerItem>
      </TickerBar>

      <StatsBar>
        <StatItem>
          <StatValue>$WOJAK</StatValue>
          <StatLabel>the original ticker</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>Sept 2020</StatValue>
          <StatLabel>deployed on ethereum</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>First</StatValue>
          <StatLabel>no earlier $WOJAK exists</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>100%</StatValue>
          <StatLabel>community owned</StatLabel>
        </StatItem>
      </StatsBar>

      <StorySection>
        <SectionTitle>the lore</SectionTitle>
        {storyCards.map((card, i) => (
          <ContentCard key={i} $reverse={i % 2 === 1}>
            <GifWrapper>
              <img src={card.gif} alt={card.alt} />
            </GifWrapper>
            <CardText>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.text}</CardDescription>
            </CardText>
          </ContentCard>
        ))}
      </StorySection>
    </Layout>
  );
}
