"use client";

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useMemberVote } from "@/hooks/useMemberVote";
import { LoaderThree } from "@/components/ui/loader";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react"; 

interface VotingCardProps {
  title: string;
  optionId: number;
  votes: number;
  totalVotes: number;
  hasVoted: boolean; 
}

export const VotingCard = ({ title, optionId, votes, totalVotes, hasVoted }: VotingCardProps) => {
  const { castVote, isPending, workflowStation } = useMemberVote();

  const percentage = totalVotes > 0 ? (votes / totalVotes) * 100 : 0;
  const isVotingOpen = workflowStation === 1;

  // We add hasVoted to the lock logic
  const canVote = isVotingOpen && !hasVoted && !isPending;

  return (
    <Card className="w-full max-w-sm border border-slate-800 bg-slate-900/40 backdrop-blur-xl transition-all duration-500 hover:border-indigo-500/50 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.3)] group">
      <CardHeader className="pb-2 border-b border-slate-800/50 bg-slate-900/20">
        <CardTitle className="text-xl font-black text-white tracking-tighter uppercase italic group-hover:text-indigo-400 transition-colors">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-8 space-y-8">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em]">Live Support</span>
            <p className="text-4xl font-black text-white tabular-nums">{votes}</p>
          </div>
          <p className="text-sm font-bold text-slate-500 tracking-tighter">{percentage.toFixed(1)}%</p>
        </div>
        
        <div className="space-y-3">
          <div className="relative h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(99,102,241,0.5)]"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] uppercase tracking-widest font-black text-slate-500">
            <span>Network Share</span>
            <span className="text-slate-400">Locked</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pb-8">
        <Button
          className={cn(
            "w-full h-12 font-black uppercase tracking-widest transition-all duration-300",
            // 1. We check hasVoted FIRST to override other styles
            hasVoted
              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/50 cursor-default"
              : isVotingOpen 
                ? "bg-white text-slate-950 hover:bg-indigo-400 hover:scale-[1.02] shadow-xl" 
                : "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"
          )}
          // 2. We explicitly disable the button if they have voted
          disabled={!canVote}
          onClick={() => castVote(optionId)}
        >
          {/* 3. We update the text and icon based on the state */}
          {isPending ? (
            <div className="flex items-center gap-3">
              <LoaderThree />
              <span className="animate-pulse text-xs">Processing...</span>
            </div>
          ) : hasVoted ? (
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              <span>Vote Recorded</span>
            </div>
          ) : (
            "Cast Your Vote"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};