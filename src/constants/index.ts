export const ContractAddress = "0xf74da0832C46F40D6d77B6f5A38941AFB0c90E5A";

export const ABI =  [
        {
            "type": "constructor",
            "inputs": [
                {
                    "name": "entryFee",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "addressVoted",
            "inputs": [
                {
                    "name": "voter",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getElectionId",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getOptionAVotes",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getOptionBVotes",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getOwner",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getVoters",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getWorkflowStation",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint8",
                    "internalType": "enum MemberVote.WorkFlowStation"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "resetVotes",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "startVote",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "vote",
            "inputs": [
                {
                    "name": "option",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "withdraw",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "error",
            "name": "MemberVote__AlreadyVoted",
            "inputs": []
        },
        {
            "type": "error",
            "name": "MemberVote__InvalidEntryFee",
            "inputs": []
        },
        {
            "type": "error",
            "name": "MemberVote__InvalidOption",
            "inputs": []
        },
        {
            "type": "error",
            "name": "MemberVote__NotOwner",
            "inputs": []
        },
        {
            "type": "error",
            "name": "MemberVote__WithdrawFailed",
            "inputs": []
        },
        {
            "type": "error",
            "name": "MemberVote__WrongWorkflowStation",
            "inputs": []
        }
    ]