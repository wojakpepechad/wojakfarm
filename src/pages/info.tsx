// If using TypeScript (info.tsx)
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from "@/styles/Home.module.css";
import { SwapWidget } from '@uniswap/widgets'



const Info: NextPage = () => {
    return (
        <>
            <main>
            <Link href="/">
                    <title>Wojak.farm</title>
                </Link>

                <Link href="/">
                    Go back to home
                </Link>
            </main>
        </>
    );
};

export default Info;
