import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { useAccount, useConnect, useContractRead } from 'wagmi';
import Link from 'next/link';
import { ABIWojak } from '../contracts/ABIS';
import { formatUnits, BigNumberish } from "ethers";
import { SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'

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

const SocialLinks = () => {
    return (
        <div className={styles.socialContainer}>
            <div className={styles.row}>
                <a href="https://twitter.com/wojakfarm" target="_blank" rel="noopener noreferrer">
                    <Image width={50} height={50} src="/socials/x-logo.png" alt="Twitter" className={styles.logoImage} />
                </a>
                <a href="https://t.me/firstwojakdeployed" target="_blank" rel="noopener noreferrer">
                    <Image width={50} height={50} src="/socials/telegram-logo.png" alt="Telegram" className={styles.logoImage} />
                </a>
                <a href="https://www.dextools.io/app/es/ether/pair-explorer/0x20267b3c4148446f2647af96d320db88c383537f" target="_blank" rel="noopener noreferrer">
                    <Image width={50} height={50} src="/socials/dextools-logo.png" alt="Dextools" className={styles.logoImage} />
                </a>
            </div>
            <div className={styles.row}>
                <a href="https://app.uniswap.org/#/swap?outputCurrency=0x4fd2EC9bDd398f8e522d76eA3704F8dBdc1f23f4" target="_blank" rel="noopener noreferrer">
                    <Image width={50} height={50} src="/socials/uniswap-logo.png" alt="Uniswap" className={styles.logoImage} />
                </a>
                <a href="https://the-og-pepe.medium.com/" target="_blank" rel="noopener noreferrer">
                    <Image width={50} height={50} src="/socials/medium-logo.png" alt="Medium" className={styles.logoImage} />
                </a>
                <a href="https://github.com/theogpepe/" target="_blank" rel="noopener noreferrer">
                    <Image width={50} height={50} src="/socials/github-logo.png" alt="Medium" className={styles.logoImage} />
                </a>
            </div>
        </div>
    );
};

export default function Home() {
	const [isNetworkSwitchHighlighted, setIsNetworkSwitchHighlighted] = useState(false);
	const [isConnectHighlighted, setIsConnectHighlighted] = useState(false);

	const { connector: activeConnector, isConnected, address } = useAccount()
	const { connect, connectors, error, isLoading, pendingConnector } = useConnect()

	const closeAll = () => {
		setIsNetworkSwitchHighlighted(false);
		setIsConnectHighlighted(false);
	};



	function TokenBalanceComponent() {
		const { data, isError, isLoading } = useContractRead({
			address: "0x4fd2EC9bDd398f8e522d76eA3704F8dBdc1f23f4", // Your contract's address
			abi: ABIWojak, // Your contract's ABI
			functionName: 'balanceOf', // Replace with your contract's relevant function
			args: [address], // Arguments for the function call
		});

		if (isLoading) return <div>Loading...</div>;
		if (isError) return <div>Error loading balance</div>;

		// Assuming the balance is returned as a BigNumber, convert it as needed
		const balanceInWei = data || 0;
		const formattedBalance: string = formatUnits(balanceInWei.toString(), 'ether');

		return (
			<div>
				Wojak Balance: {parseFloat(formattedBalance).toFixed(3)}
			</div>
		);
	}

	const DextChart = () => {
		return (
			<iframe id="dextools-widget"
				title="DEXTools Trading Chart"
				width="500" height="400"
				src="https://www.dextools.io/widget-chart/es/ether/pe-light/0x20267b3c4148446f2647af96d320db88c383537f?theme=light&chartType=2&chartResolution=30&drawingToolbars=false"></iframe>
		)
	}

	
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
	  




	return (
		<>
			<Head>
				<title>Wojak.farm</title>
				<meta
					name="description"
					content="The home of the wojak.farm community, the first Wojak token on Ethereum"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header>
				<div className={styles.header}>
					<div className={styles.logo}>
						<Image
							src="/logo.jpg"
							alt="WojakFarm Logo"
							height="32"
							width="32"
						/>
						<span> wojak.farm</span>
					</div>
					<div className={styles.buttons}>

							<w3m-network-button />
							<w3m-button />
						</div>
				</div>
			</header>
			<main className={styles.main}>
				<div className={styles.wrapper}>
					<div className={styles.container}>
						<h1>Wojak.farm - WOJAK</h1>
						<div className={styles.content}>
<div>
	60% of WOJAK Supply is locked for 3 months, when it unlocks, it will be distributed as rewards to PEPE-LP stakers of swap.ogpepe.io
</div>
<div>
    <a href="https://swap.ogpepe.io/#/add/ETH/0x4fd2EC9bDd398f8e522d76eA3704F8dBdc1f23f4" target="_blank" rel="noopener noreferrer">
        Add ETH/WOJAK and ETH/PEPE to start preparing for the farming
    </a>
</div>

							<div className={styles.socialContainer}>
                    <SocialLinks />
                </div>

						</div>
					</div>
					<div className={styles.footer}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							height={16}
							width={16}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
							/>
						</svg>
						<Link href="/info">
							Check out the full information here
						</Link>
					</div>
				</div>

                <div className={styles.chartSwapperContainer}>
                    <DextChart />
                    <UniSwapper />
                </div>

			</main>
		</>
	);
}
