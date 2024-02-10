// If using TypeScript (info.tsx)
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from "@/styles/Home.module.css";
import { SwapWidget } from '@uniswap/widgets'

const DextChart = () => {
    return (
        <iframe id="dextools-widget"
            title="DEXTools Trading Chart"
            width="500" height="400"
            src="https://www.dextools.io/widget-chart/es/ether/pe-light/0x20267b3c4148446f2647af96d320db88c383537f?theme=light&chartType=2&chartResolution=30&drawingToolbars=false"></iframe>
    )
}

const MY_TOKEN_LIST = [
    {
    "name": "Wojak.farm",
    "address": "0x4fd2EC9bDd398f8e522d76eA3704F8dBdc1f23f4",
    "symbol": "WOJAK",
    "decimals": 18,
    "chainId": 1,
    "logoURI": "https://pbs.twimg.com/profile_images/1312314914392993792/AEEJkpQM_400x400.jpg"
  },
    {
    "name": "Tether USD",
    "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    "symbol": "USDT",
    "decimals": 6,
    "chainId": 1,
    "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png"
  },
]

const UniSwapper = () => {
    const wojak = "0x4fd2EC9bDd398f8e522d76eA3704F8dBdc1f23f4";
    
    // Define your custom token list URI (or use a predefined one)
    const customTokenListUri = MY_TOKEN_LIST;
    
    const widgetConfig = {	  
      tokenList: customTokenListUri,
      
      // Other widget configuration options...
    };
  
    return (
      <div className="Uniswap">
        <SwapWidget {...widgetConfig} defaultOutputTokenAddress={wojak} />
      </div>
    );
  }
  



const Info: NextPage = () => {
    return (
        <>
            <Head>
                <title>Info - wojak.farm</title>
            </Head>
            <main>
                <h1>Information Page</h1>
                <p>This is the info page for wojak.farm.</p>
                <div className={styles.chartSwapperContainer}>
                    <DextChart />
                    <UniSwapper />
                </div>

                <Link href="/">
                    Go back to home
                </Link>
            </main>
        </>
    );
};

export default Info;
