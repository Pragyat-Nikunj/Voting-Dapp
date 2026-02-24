"use client";

import '@rainbow-me/rainbowkit/styles.css';

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {anvil, sepolia } from 'wagmi/chains';
import { http } from 'viem';

export default getDefaultConfig({
    appName: 'Voting Dapp',
    projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || '',
    chains: [anvil, sepolia],
    ssr: true,
    transports: {
        [anvil.id]: http('http://127.0.0.1:8545'),
        [sepolia.id]: http(),
    },
});