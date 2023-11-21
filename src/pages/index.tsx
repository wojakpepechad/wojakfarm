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
				<div
					className={styles.backdrop}
					style={{
						opacity:
							isConnectHighlighted || isNetworkSwitchHighlighted
								? 1
								: 0,
					}}
				/>
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
						<div
							onClick={closeAll}
							className={`${styles.highlight} ${isNetworkSwitchHighlighted
									? styles.highlightSelected
									: ``
								}`}
						>
							<w3m-network-button />
						</div>
						<div
							onClick={closeAll}
							className={`${styles.highlight} ${isConnectHighlighted
									? styles.highlightSelected
									: ``
								}`}
						>
							<w3m-button />
						</div>
					</div>
				</div>
			</header>
			<main className={styles.main}>
				<div className={styles.wrapper}>
					<div className={styles.container}>
						<h1>Wojak.farm - WOJAK</h1>
						<div className={styles.content}>
							<ul>
								<li>
									Welcome to wojak.farm. The oldest WOJAK community on Ethereum!
								</li>
								<li>
									Click{" "}
									<span
										onClick={() => {
											setIsConnectHighlighted(
												!isConnectHighlighted
											);
											setIsNetworkSwitchHighlighted(
												false
											);
										}}
										className={styles.button}
									>
										Connect Wallet
									</span>{" "}
									to connect your Ethereum wallet.
								</li>
								<li>
									Click{" "}
									<span
										onClick={() => {
											setIsNetworkSwitchHighlighted(
												!isNetworkSwitchHighlighted
											);
											setIsConnectHighlighted(false);
										}}
										className={styles.button}
									>
										Select Network
									</span>{" "}
									to change networks if you are on not on the most OG network, ETHEREUM!
								</li>
							</ul>
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
				<div className={styles.wrapper}>
					<div className={styles.container}>
						{isConnected ? (
							<div className={styles.content}>
								<h2>Blockchain Info</h2>
								<p>Connected as: {address}</p>
								<TokenBalanceComponent />
							</div>
						) : (
							<div className={styles.content}>
								<h2>Connect to Blockchain</h2>
								<p>Please connect to view blockchain information.</p>
								{/* Render connect button or logic */}
							</div>
						)}
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
