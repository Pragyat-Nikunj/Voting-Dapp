"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { useMemberVote } from "@/hooks/useMemberVote";
import DecryptedText from "@/components/DecryptedText";

export const Header = () => {
  const { workflowStation } = useMemberVote();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center group-hover:rotate-6 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <span className="text-slate-950 font-black text-sm italic">VL</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
            <DecryptedText 
                text="VoteLab" 
                speed={80} 
                animateOn="view" 
                revealDirection="center"
            />
          </span>
        </Link>

        {/* Action Section */}
        <div className="flex items-center gap-8">
          <div className="hidden lg:flex items-center gap-3 px-4 py-1.5 bg-slate-900/50 border border-slate-800 rounded-full">
            <span className={`h-2 w-2 rounded-full ${workflowStation === 1 ? 'bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse' : 'bg-slate-600'}`} />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              {workflowStation === 1 ? "Protocol Active" : "System Standby"}
            </span>
          </div>

          <div className="scale-95 origin-right">
            <ConnectButton 
              accountStatus="avatar" 
              showBalance={false} 
              chainStatus="icon" 
            />
          </div>
        </div>
      </div>
    </header>
  );
};