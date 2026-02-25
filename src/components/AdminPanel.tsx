"use client";

import { useMemberVote } from "@/hooks/useMemberVote";
import { Settings, Play, Square, Wallet, Loader2, ShieldCheck } from "lucide-react";

const WORKFLOW = { REGISTERING: 0, VOTING: 1, RESETTING: 2 };

export const AdminPanel = () => {
  const { 
    workflowStation, prizePool, isOwner, 
    startVote, resetVotes, withdrawFunds, isPending 
  } = useMemberVote();

  if (!isOwner) return null;

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] w-full max-w-fit px-4">
      <div className="flex items-center gap-6 px-6 py-4 bg-zinc-950/80 border border-white/10 backdrop-blur-2xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10 animate-in slide-in-from-bottom-8 duration-700">
        <div className="flex items-center gap-3 pr-6 border-r border-white/10">
          <div className="relative">
             <Settings className={`w-5 h-5 text-indigo-400 ${isPending ? 'animate-spin' : ''}`} />
             <ShieldCheck className="w-2.5 h-2.5 text-emerald-500 absolute -bottom-0.5 -right-0.5" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[10px] font-black uppercase tracking-widest text-white">Admin Console</span>
            <span className="text-[8px] font-medium text-zinc-500 uppercase mt-1">Authorized Access Only</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {(workflowStation === WORKFLOW.REGISTERING || workflowStation === WORKFLOW.RESETTING) && (
            <button 
              onClick={startVote}
              disabled={isPending}
              className="group flex items-center gap-2 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-black rounded-lg text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 disabled:opacity-50"
            >
              {isPending ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              Open Polls
            </button>
          )}

          {workflowStation === WORKFLOW.VOTING && (
            <button 
              onClick={resetVotes}
              disabled={isPending}
              className="group flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-black rounded-lg text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 disabled:opacity-50"
            >
              {isPending ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Square className="w-3.5 h-3.5 fill-current" />}
              Close & Tally
            </button>
          )}

          {parseFloat(prizePool) > 0 && (
            <button 
              onClick={withdrawFunds}
              disabled={isPending}
              className="flex items-center gap-2 px-4 py-2 bg-yellow-500/10 hover:bg-yellow-500 text-yellow-500 hover:text-black rounded-lg text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 border border-yellow-500/20"
            >
              <Wallet className="w-3.5 h-3.5" />
              Collect {prizePool} ETH
            </button>
          )}
        </div>
      </div>
    </div>
  );
};