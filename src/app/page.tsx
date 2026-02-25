"use client";

import { useAccount } from "wagmi";
import { DashboardGrid } from "@/components/DashboardGrid";
import { WalletNotConnected } from "@/components/WalletNotConnected";
import FadeContent from "@/components/FadeContent";
import DecryptedText from "@/components/DecryptedText";  

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      {/* 1. Header Intro (Minimalist) */}
      <div className="mb-16 text-center">
        <p className="text-slate-500 max-w-lg mx-auto font-medium">
          <DecryptedText
            text= "Secure, transparent, and decentralized voting powered by Ethereum."
            speed={50}
            animateOn="view"
            revealDirection="start"         
          /> 
        </p>
      </div>

      <FadeContent blur={true} duration={0.8}>
        {isConnected ? (
          <DashboardGrid />
        ) : (
          <WalletNotConnected />
        )}
      </FadeContent>
    </div>
  );
}