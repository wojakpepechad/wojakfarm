// Farms.tsx
import Head from "next/head";
import type { NextPage } from 'next';

// pages/Farms.tsx
import LPPairSection from "@/components/LPPairSection";
// ... other imports



const Farms: NextPage = () => {
    const farmPairs = [
        { pairName: "PEPE/ETH", apr: 10.39, liquidity: 0, multiplier: 0.3, earned: 0, available: 0, staked: 0 },
        { pairName: "PEPE/WOJAK", apr: 12.39, liquidity: 0, multiplier: 0.3, earned: 0, available: 0, staked: 0 },
        { pairName: "WOJAK/ETH", apr: 13.39, liquidity: 0, multiplier: 0.3, earned: 0, available: 0, staked: 0 },
        { pairName: "PEPE/USDT", apr: 14.39, liquidity: 0, multiplier: 0.3, earned: 0, available: 0, staked: 0 },
        { pairName: "PEPE/USDC", apr: 14.39, liquidity: 0, multiplier: 0.3, earned: 0, available: 0, staked: 0 },
    ];

    return (
        <>
            <Head>
                <title>Farms - Wojak.farm</title>
            </Head>
            <div>
                <h1>Farms</h1>

                    {farmPairs.map((farm, index) => (
                        <LPPairSection
                            key={index}
                            pairName={farm.pairName}
                            apr={farm.apr}
                            liquidity={farm.liquidity}
                            multiplier={farm.multiplier}
                            earned={farm.earned}
                            available={farm.available}
                            staked={farm.staked}
                        />
                    ))}
            </div>
        </>
    );
};

export default Farms;