
#  VoteLab: Decentralized Governance Engine
[![Frontend](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Testing](https://img.shields.io/badge/Vitest-646cff?style=flat-square&logo=vitest)](https://vitest.dev/)

A professional-grade decentralized voting application (DApp) featuring a three-stage state machine, automated winner determination, and a secure administrative sweep mechanism. Built with a focus on **Type Safety**, **On-Chain Security**, and **Test-Driven Development**.

- **Smart Contract**: [VoteLab Contract](https://github.com/Pragyat-Nikunj/Smart-Voting-Contract)

---


## 📖 Table of Contents
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Technical Stack](#technical-stack)
- [Contract Architecture](#contract-architecture)
- [Getting Started](#getting-started)
- [Testing Suite](#testing-suite)
  - [Frontend (Vitest)](#frontend-vitest)
  - [Smart Contract (Foundry)](#smart-contract-foundry)
- [Admin Controls](#admin-controls)
- [Author](#author)

---

## 🌟 Project Overview

VoteLab is designed to handle organizational governance through a secure, transparent on-chain process. Unlike simple voting contracts, this engine implements a **Workflow Station** logic that separates registration, active voting, and result-resetting into distinct, immutable phases.

### Why it matters:
- **Financial Integrity**: Requires an entry fee to vote, preventing sybil attacks.
- **Data Persistence**: Preserves results in the `Resetting` phase for frontend visualization before clearing state.
- **Owner Security**: Uses the `onlyOwner` pattern to manage election lifecycles and fund withdrawals.

---

## ✨ Key Features

- **🏆 Automated Winner UI**: Dynamic dashboard that calculates and showcases winners in real-time once voting concludes.
- **💰 Prize Pool Management**: Transparent tracking of contract balance (entry fees) with a secure "Sweep" function for the owner.
- **🛠️ Admin HUD**: A glass-morphism floating control panel that adapts its buttons based on the contract's current workflow state.
- **🛡️ Access Control**: Hardened logic ensures only the contract deployer can manage election phases.

---

## 🛠️ Technical Stack

| Layer | Technologies |
| :--- | :--- |
| **Smart Contract** | Solidity v0.8.18, Foundry |
| **Frontend Framework** | Next.js 16 (App Router), TypeScript |
| **Web3 Integration** | Wagmi v2, Viem, ConnectKit/RainbowKit |
| **Styling** | Tailwind CSS, Lucide React (Icons), Framer Motion |
| **Unit Testing** | Vitest, React Testing Library |

---

## 🏗️ Contract Architecture

The contract operates on a strict **Finite State Machine** (FSM) model:

1. **Registering**: The entry point. Voting is disabled; the admin is preparing the proposal.
2. **Voting**: Open for participation. Users can cast votes by paying the `i_entryFee`.
3. **Resetting**: Voting closed. Results are locked and visible. This is where the owner "sweeps" the collected fees.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [Foundry](https://book.getfoundry.sh/getting-started/installation) (for contract testing)



1. Clone the repository:
```bash
git clone https://github.com/Pragyat-Nikunj/Voting-Dapp.git
cd Voting-Dapp
````

2. Install frontend dependencies:

```bash
cd frontend
npm install
```

3. Run the development server:

```bash
npm run dev
```

## 🧪 Testing Suite

This project maintains high code coverage to ensure reliability in financial transactions.

### Frontend (Vitest)

Located in `/test/components`, our frontend tests ensure the UI remains a faithful representation of the blockchain state.

* **Mocking**: We mock the `useMemberVote` hook to simulate various contract states (owner vs. non-owner, different workflow stations).
* **Security**: Verifies that the `AdminPanel` is physically absent from the DOM for unauthorized wallets.
* **Interactions**: Simulates user clicks to verify that `castVote` is triggered with the correct option ID.

```bash
# Run frontend tests
npm test

```

## Smart Contract (Foundry)

* **Unit Tests**: Coverage for every error revert (e.g., `MemberVote__AlreadyVoted`).
* **State Checks**: Ensures `optionAVotes` and `optionBVotes` are preserved during the `Resetting` phase.
* **Security**: Proves that non-owners cannot call `withdraw()` or `startVote()`.


## 🎮 Admin Controls

The application features a unique **Admin HUD** that appears only when the `isOwner` check returns true.

* **Start Election**: Clears the `voters` array, resets vote counts to `0`, and opens the polls.
* **Close Voting**: Freezes the current counts and flips the UI to the "Winner" screen.
* **Sweep Funds**: Withdraws the entire contract balance to the owner's wallet.

