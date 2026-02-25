"use client";

import { useReadContract, useWriteContract, useAccount, useWaitForTransactionReceipt, useBalance } from "wagmi";
import { ContractAddress, ABI } from "@/constants";
import { parseEther, formatEther } from "viem";
import { useEffect } from "react";

export const useMemberVote = () => {
    const { address, isConnected } = useAccount();
    const { writeContract, data: hash, isPending, error } = useWriteContract();

    const { isSuccess: txSuccess } = useWaitForTransactionReceipt({ hash });

    const { data: balanceData, refetch: refetchBalance } = useBalance({
        address: ContractAddress,
    });

    const { data: workflowStation, refetch: refetchStatus } = useReadContract({
        address: ContractAddress, abi: ABI, functionName: "getWorkflowStation",
    });

    const { data: electionId, refetch: refetchElectionId } = useReadContract({
        address: ContractAddress, abi: ABI, functionName: "getElectionId",
    });

    const { data: ownerAddress } = useReadContract({
        address: ContractAddress, abi: ABI, functionName: "getOwner",
    });

    const { data: userVotedId, refetch: refetchUserStatus } = useReadContract({
        address: ContractAddress,
        abi: ABI,
        functionName: "addressVoted",
        args: [address!],
        query: { enabled: !!address }
    });

    const { data: optionAVotes, refetch: refetchA } = useReadContract({
        address: ContractAddress, abi: ABI, functionName: "getOptionAVotes",
    });

    const { data: optionBVotes, refetch: refetchB } = useReadContract({
        address: ContractAddress, abi: ABI, functionName: "getOptionBVotes",
    });

    const startVote = () => {
        writeContract({
            address: ContractAddress,
            abi: ABI,
            functionName: "startVote",
        });
    };

    const resetVotes = () => {
        writeContract({
            address: ContractAddress,
            abi: ABI,
            functionName: "resetVotes",
        });
    };

    const withdrawFunds = () => {
        writeContract({
            address: ContractAddress,
            abi: ABI,
            functionName: "withdraw",
        });
    };

    const castVote = (option: number) => {
        writeContract({
            address: ContractAddress,
            abi: ABI,
            functionName: "vote",
            args: [BigInt(option)],
            value: parseEther("0.01"),
        });
    };

    useEffect(() => {
        if (txSuccess) {
            refetchStatus();
            refetchElectionId();
            refetchUserStatus();
            refetchA();
            refetchB();
            refetchBalance();
        }
    }, [txSuccess, refetchStatus, refetchElectionId, refetchUserStatus, refetchA, refetchB, refetchBalance]);

    const hasVoted = isConnected &&
        electionId != null &&
        userVotedId != null
        ? BigInt(electionId.toString()) === BigInt(userVotedId.toString())
        : false;

    return {
        address,
        isConnected,
        workflowStation: workflowStation !== undefined ? Number(workflowStation) : 0,
        optionAVotes: optionAVotes ? Number(optionAVotes) : 0,
        optionBVotes: optionBVotes ? Number(optionBVotes) : 0,
        prizePool: balanceData ? formatEther(balanceData.value) : "0",
        isOwner: address?.toLowerCase() === (ownerAddress as string)?.toLowerCase(),
        hasVoted,
        castVote,
        startVote,    
        resetVotes,   
        withdrawFunds,
        isPending,
        hash,
        error,
        refetchAll: () => {
            refetchStatus();
            refetchElectionId();
            refetchUserStatus();
            refetchA();
            refetchB();
            refetchBalance();
        }
    };
};