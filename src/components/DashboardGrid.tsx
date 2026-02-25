"use client";

import { useMemberVote } from "@/hooks/useMemberVote";
import { VotingCard } from "@/components/VotingCard";
import { StatusBadge } from "@/components/StatusBadge";
import { AdminPanel } from "@/components/AdminPanel";
import { Sparkles, Trophy } from "lucide-react";

const WORKFLOW = { REGISTERING: 0, VOTING: 1, RESETTING: 2 };

export const DashboardGrid = () => {
  const { 
    optionAVotes, optionBVotes, hasVoted, 
    workflowStation, prizePool 
  } = useMemberVote();
  
  const election = {
    question: "Which fruit provides the best energy for coding sessions?",
    optionA: "Crispy Apple",
    optionB: "Sweet Banana"
  };

  const totalVotes = optionAVotes + optionBVotes;

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
      
      {/* 1. REGISTERING PHASE */}
      {workflowStation === WORKFLOW.REGISTERING && (
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8 text-center animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="p-6 rounded-3xl bg-indigo-500/5 border border-indigo-500/10 text-indigo-400">
            <Sparkles className="w-16 h-16 animate-pulse" />
          </div>
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase italic leading-none">
              Governance <br/> <span className="text-indigo-500">Standby</span>
            </h2>
            <p className="text-zinc-500 max-w-md mx-auto text-lg font-medium">
              The contract is in a preparation state. Voting will commence shortly.
            </p>
          </div>
        </div>
      )}

      {/* 2. RESETTING PHASE */}
      {workflowStation === WORKFLOW.RESETTING && (
        <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-10 text-center animate-in zoom-in fade-in duration-700">
          <div className="relative">
             <div className="absolute -inset-4 bg-yellow-500/20 blur-3xl rounded-full" />
             <div className="relative p-6 rounded-full bg-zinc-900 border border-yellow-500/30 text-yellow-400 shadow-2xl">
               <Trophy className="w-20 h-20" />
             </div>
          </div>
          
          <div className="space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-[10px] font-black uppercase tracking-[0.3em] text-yellow-500">
              Session {workflowStation} Finalized
            </span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase italic">
              {optionAVotes === optionBVotes ? "Split Decision" : 
               optionAVotes > optionBVotes ? election.optionA : election.optionB}
            </h2>
            <p className="text-zinc-400 text-xl font-medium tracking-tight">
              Community Pool: <span className="text-white">{prizePool} ETH</span>
            </p>
          </div>
        </div>
      )}

      {/* 3. VOTING PHASE */}
      {workflowStation === WORKFLOW.VOTING && (
        <div className="space-y-16 py-12 animate-in fade-in duration-1000">
          <div className="relative pl-8 border-l-4 border-indigo-500 space-y-6">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400">
                LATEST PROPOSAL
              </span>
              <StatusBadge />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.85] uppercase italic max-w-4xl">
              {election.question}
            </h2>

            {hasVoted && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Recorded On-Chain</span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <VotingCard 
              title={election.optionA} 
              optionId={0} 
              votes={optionAVotes} 
              totalVotes={totalVotes} 
              hasVoted={hasVoted}
            />
            <VotingCard 
              title={election.optionB} 
              optionId={1} 
              votes={optionBVotes} 
              totalVotes={totalVotes} 
              hasVoted={hasVoted} 
            />
          </div>
        </div>
      )}

      <AdminPanel />
    </div>
  );
};