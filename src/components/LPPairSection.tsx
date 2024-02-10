import React, { useState } from 'react';
import styled from 'styled-components';

interface LPPairSectionProps {
  pairName: string;
  pairIconUrl?: string;
  apr: number;
  liquidity: number;
  multiplier: number;
  earned: number;
  available: number;
  staked: number;
}

const Section = styled.div`
  background: #3b4040;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RowInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;


const LPPairSection: React.FC<LPPairSectionProps> = ({
  pairName,
  pairIconUrl,
  apr,
  liquidity,
  multiplier,
  earned,
  available,
  staked,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Section>
      <Details>
        {pairIconUrl && <img src={pairIconUrl} alt={pairName} width={40} height={40} />}
        <div>
          <strong>{pairName}</strong>
          <div>Multiplier: {multiplier}x</div>
        </div>
        <Button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'Less' : 'More'}
        </Button>
      </Details>
      <RowInfo>
        <div>APR: {apr}%</div>
        <div>Available: {available} LP</div>
        <Button>Add Liquidity</Button>
      </RowInfo>
      {isExpanded && (
        <>
          <div>Earned: {earned} LP</div>
          <div>Staked Liquidity: ${liquidity}</div>
          <div>Staked: {staked} LP</div>
          <div>
            <a href="#">See Pair Info</a>
            <a href="#">View Contract</a>
          </div>
        </>
      )}
    </Section>
  );
};

export default LPPairSection;
