"use client";

import { Badge } from "@/components/ui/badge";
import { useMemberVote } from "@/hooks/useMemberVote";
import { cn } from "@/lib/utils";

export const StatusBadge = () => {
  const { workflowStation } = useMemberVote();

  const statusConfig = [
    { 
      label: "System: Initializing", 
      styles: "bg-slate-900/50 text-slate-400 border-slate-700 hover:bg-slate-900/50" 
    },
    { 
      label: "Network Live: Voting", 
      styles: "bg-emerald-500/10 text-emerald-400 border-emerald-500/50 hover:bg-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]" 
    },
    { 
      label: "Protocol: Resetting", 
      styles: "bg-amber-500/10 text-amber-400 border-amber-500/50 hover:bg-amber-500/20" 
    },
  ];

  const current = statusConfig[workflowStation ?? 0] || statusConfig[0];

  return (
    <div className="flex items-center gap-3">
      {workflowStation === 1 && (
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_10px_#10b981]"></span>
        </span>
      )}
      
      <Badge 
        variant="outline" 
        className={cn(
          "px-4 py-1 font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-300 rounded-full", 
          current.styles
        )}
      >
        {current.label}
      </Badge>
    </div>
  );
};