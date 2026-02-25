"use client";

import { WalletIcon } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard"; 
import VariableProximity from "@/components/VariableProximity"; 

export const WalletNotConnected = () => {
  return (
    <div className="w-full max-w-2xl mx-auto py-10">
      <SpotlightCard 
        className="border-slate-800 bg-slate-950 p-12 text-center overflow-hidden relative"
        spotlightColor="rgba(255, 255, 255, 0.05)"
      >
        {/* Visual "Pulse" in the background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-indigo-500/20 blur-[80px] rounded-full" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="h-20 w-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center mb-8 shadow-2xl border border-slate-700/50">
            <WalletIcon className="h-10 w-10 text-indigo-400" />
          </div>

          <div className="mb-6">
            <VariableProximity
              label="WALLET NOT CONNECTED"
              className="text-4xl font-black tracking-tighter text-white uppercase cursor-default"
              fromFontVariationSettings="'wght' 900, 'opsz' 40"
              toFontVariationSettings="'wght' 100, 'opsz' 10"
              containerRef={{ current: null }} 
              radius={100}
            />
          </div>

          <p className="text-slate-400 text-sm max-w-xs mx-auto leading-relaxed mb-8">
            The governance portal is encrypted. 
            Connect your signature to synchronize with the blockchain.
          </p>

          <div className="flex items-center gap-3 px-4 py-2 bg-slate-900/50 rounded-full border border-slate-800">
            <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-300">
              Awaiting Authentication
            </span>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
};