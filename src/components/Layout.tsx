import Head from 'next/head';
import styled from 'styled-components';
import Navbar from './Navbar';
import { theme } from '@/styles/theme';

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  padding-top: 64px; /* navbar height */
  width: 100%;
`;

const ContentArea = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 20px 16px;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 24px;
  border-top: 1px solid ${theme.colors.border};
  font-size: 13px;
  color: ${theme.colors.textMuted};
  font-family: ${theme.fonts.heading};

  span {
    color: ${theme.colors.wojakYellow};
  }
`;

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  fullWidth?: boolean;
}

export default function Layout({ children, title = 'Wojak.farm', fullWidth = false }: LayoutProps) {
  return (
    <PageWrapper>
      <Head>
        <title>{title}</title>
        <meta name="description" content="wojak.farm - the first token with the $WOJAK ticker. ever. on any chain. deployed Sept 2020." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph (Facebook, Telegram, Discord) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wojak.farm" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="the very first $WOJAK on any blockchain. everyone else just copied the name." />
        <meta property="og:image" content="https://wojak.farm/wojak_farm_banner_1200x630.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="wojak.farm" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@wojakfarm" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content="the very first $WOJAK on any blockchain. everyone else just copied the name." />
        <meta name="twitter:image" content="https://wojak.farm/wojak_farm_banner_1200x630.png" />

        {/* Telegram specific */}
        <meta name="telegram:channel" content="@firstwojakdeployed" />
      </Head>

      <Navbar />

      <Main>
        {fullWidth ? children : <ContentArea>{children}</ContentArea>}
      </Main>

      <Footer>
        <span>wojak.farm</span> &mdash; he bought? pump it. he sold? pump it anyway.
      </Footer>
    </PageWrapper>
  );
}
