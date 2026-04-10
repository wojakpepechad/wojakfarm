import type { NextPage } from 'next';
import styled from 'styled-components';
import Layout from '@/components/Layout';
import { theme } from '@/styles/theme';

const Title = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: 36px;
  color: ${theme.colors.wojakYellow};
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: 16px;
  margin-bottom: 32px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 32px;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  background: ${theme.colors.bgCard};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.lg};
  padding: 24px;
  transition: all 0.25s;

  &:hover {
    border-color: ${theme.colors.borderHover};
    box-shadow: ${theme.shadows.card};
  }
`;

const CardTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 18px;
  color: ${theme.colors.wojakYellow};
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CardText = styled.p`
  font-size: 14px;
  line-height: 1.7;
  color: ${theme.colors.textSecondary};
`;

const ContractBox = styled.div`
  background: ${theme.colors.bgCard};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.lg};
  padding: 24px;
  margin-bottom: 32px;
`;

const ContractLabel = styled.div`
  font-size: 12px;
  color: ${theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
`;

const ContractAddress = styled.a`
  font-family: ${theme.fonts.mono};
  font-size: 14px;
  color: ${theme.colors.wojakYellow};
  word-break: break-all;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`;

// ─── Proof Section ───────────────────────────────────────
const ProofSection = styled.section`
  margin-bottom: 40px;
`;

const ProofTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: 28px;
  color: ${theme.colors.wojakYellow};
  margin-bottom: 8px;
`;

const ProofSubtitle = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: 15px;
  margin-bottom: 24px;
  line-height: 1.6;
`;

const ProofCard = styled.div`
  background: ${theme.colors.bgCard};
  border: 1px solid ${theme.colors.wojakYellow};
  border-radius: ${theme.radii.lg};
  padding: 28px;
  margin-bottom: 16px;
  box-shadow: 0 0 24px rgba(245, 197, 24, 0.06);
`;

const ProofRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 12px 0;
  border-bottom: 1px solid ${theme.colors.border};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  &:first-child {
    padding-top: 0;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 4px;
  }
`;

const ProofLabel = styled.span`
  font-size: 13px;
  color: ${theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  flex-shrink: 0;
`;

const ProofValue = styled.span`
  font-family: ${theme.fonts.mono};
  font-size: 14px;
  color: ${theme.colors.textPrimary};
  text-align: right;
  word-break: break-all;

  @media (max-width: ${theme.breakpoints.sm}) {
    text-align: left;
  }
`;

const ProofLink = styled.a`
  font-family: ${theme.fonts.mono};
  font-size: 14px;
  color: ${theme.colors.wojakYellow};
  word-break: break-all;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`;

const VerifyLinks = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const VerifyButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 18px;
  border-radius: ${theme.radii.sm};
  font-size: 13px;
  font-weight: 600;
  background: rgba(245, 197, 24, 0.08);
  border: 1px solid rgba(245, 197, 24, 0.2);
  color: ${theme.colors.wojakYellow};
  transition: all 0.2s;

  &:hover {
    background: rgba(245, 197, 24, 0.15);
    border-color: ${theme.colors.wojakYellow};
    transform: translateY(-1px);
  }
`;

const ProofNote = styled.p`
  font-size: 13px;
  color: ${theme.colors.textMuted};
  line-height: 1.6;
  margin-top: 16px;
  font-style: italic;
`;

const DisclaimerBox = styled.div`
  background: rgba(248, 113, 113, 0.06);
  border: 1px solid rgba(248, 113, 113, 0.15);
  border-radius: ${theme.radii.md};
  padding: 20px;
  font-size: 13px;
  color: ${theme.colors.textMuted};
  line-height: 1.7;

  strong {
    color: ${theme.colors.wojakRed};
  }
`;

const DEPLOY_TX = '0xe929fe8fad87f1ff90ea156c1f601b0670f53c2263ee8046cb75b3f7bed585c8';
const CONTRACT = '0x4fd2EC9bDd398f8e522d76eA3704F8dBdc1f23f4';

const Info: NextPage = () => {
  return (
    <Layout title="Info - Wojak.farm">
      <Title>Info &amp; Proof</Title>
      <Subtitle>you&apos;re looking at the original $WOJAK. here&apos;s the proof and everything else.</Subtitle>

      {/* ─── Proof of First ─────────────────────────────── */}
      <ProofSection>
        <ProofTitle>proof it&apos;s the first</ProofTitle>
        <ProofSubtitle>
          don&apos;t trust us. verify it yourself. this is the first token with the ticker <strong>$WOJAK</strong> on
          ethereum or any chain. deployed September 26, 2020. yes, two earlier tokens had &quot;wojak&quot; in
          the name (Wojak Token with symbol WJT, and Wojak.FEEL with symbol FEEL) &mdash; but neither
          one was $WOJAK. this is. the deploy tx is public, the block is final, the timestamp is immutable.
        </ProofSubtitle>

        <ProofCard>
          <ProofRow>
            <ProofLabel>Token</ProofLabel>
            <ProofValue>Wojak.farm (WOJAK)</ProofValue>
          </ProofRow>
          <ProofRow>
            <ProofLabel>Deployed</ProofLabel>
            <ProofValue>September 26, 2020 &mdash; 22:19:32 UTC</ProofValue>
          </ProofRow>
          <ProofRow>
            <ProofLabel>Block</ProofLabel>
            <ProofValue>10,940,842</ProofValue>
          </ProofRow>
          <ProofRow>
            <ProofLabel>Deploy TX</ProofLabel>
            <ProofLink
              href={`https://etherscan.io/tx/${DEPLOY_TX}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {DEPLOY_TX} &#8599;
            </ProofLink>
          </ProofRow>
          <ProofRow>
            <ProofLabel>Contract</ProofLabel>
            <ProofLink
              href={`https://etherscan.io/address/${CONTRACT}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CONTRACT} &#8599;
            </ProofLink>
          </ProofRow>
        </ProofCard>

        <VerifyLinks>
          <VerifyButton
            href={`https://etherscan.io/tx/${DEPLOY_TX}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy TX &#8599;
          </VerifyButton>
          <VerifyButton
            href={`https://etherscan.io/address/${CONTRACT}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contract &#8599;
          </VerifyButton>
          <VerifyButton
            href="https://dune.com/queries/6975808"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dune: first &quot;wojak&quot; by name/symbol &#8599;
          </VerifyButton>
          <VerifyButton
            href="https://dune.com/queries/6975760"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dune: every $WOJAK ticker &#8599;
          </VerifyButton>
        </VerifyLinks>

        <ProofNote>
          two earlier tokens had &quot;wojak&quot; in the name &mdash; but their symbols
          are WJT and FEEL. neither is $WOJAK. the second query searches for the exact
          ticker WOJAK with no date limit &mdash; and this contract is the first result.
          fork them, run them yourself. the chain doesn&apos;t lie.
        </ProofNote>
      </ProofSection>

      {/* ─── FAQ Cards ──────────────────────────────────── */}
      <InfoGrid>
        <InfoCard>
          <CardTitle>what even is this</CardTitle>
          <CardText>
            this is where $WOJAK was born. the first. the real one.
            everything else came after and they know it. no VCs, no presale,
            no team tokens. deployed before anyone else even thought about it.
          </CardText>
        </InfoCard>

        <InfoCard>
          <CardTitle>how do i get some</CardTitle>
          <CardText>
            go to Uniswap, swap ETH for $WOJAK. that&apos;s it. no presale, no whitelist,
            no hoops to jump through. just connect your wallet and swap.
            contract is right there on etherscan if you wanna check first.
          </CardText>
        </InfoCard>

        <InfoCard>
          <CardTitle>why wojak tho</CardTitle>
          <CardText>
            because he&apos;s been through it all. every pump. every dump. every rug.
            he watched his portfolio go to zero and he&apos;s still here posting.
            if that&apos;s not the spirit of crypto idk what is.
          </CardText>
        </InfoCard>

        <InfoCard>
          <CardTitle>is it safe</CardTitle>
          <CardText>
            contract is verified on etherscan, you can read it yourself.
            liquidity is locked. but look, this is a meme coin on the internet.
            don&apos;t put in your rent money. we&apos;re not your financial advisor,
            we&apos;re a picture of a sad man.
          </CardText>
        </InfoCard>
      </InfoGrid>

      <DisclaimerBox>
        <strong>real talk:</strong> this is a meme token. it could go to zero tomorrow.
        it has no intrinsic value. there is no team promising you anything.
        don&apos;t spend money you need on this. if you&apos;re here, you&apos;re here for the
        vibes and the community. that&apos;s the deal. wagmi or whatever.
      </DisclaimerBox>
    </Layout>
  );
};

export default Info;
