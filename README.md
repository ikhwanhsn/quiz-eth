# QuizETH

![QuizETH Banner](https://i.ibb.co.com/1f5gPWQ1/quizeth-display.png)

## 🏆 Educhain Hackathon - DeFi + AI + Education Track

QuizETH is a decentralized educational platform that rewards users for learning about blockchain, DeFi, and cryptocurrency concepts. By combining educational quizzes with token rewards, we're creating a sustainable learn-to-earn ecosystem built on Ethereum.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Smart Contract](#smart-contract)
- [Technical Implementation](#technical-implementation)
- [Demo](#demo)
- [Installation & Setup](#installation--setup)
- [Future Roadmap](#future-roadmap)
- [Team](#team)
- [License](#license)

## 📝 Overview

QuizETH addresses the challenge of blockchain education by incentivizing learning through tokenized rewards. Users earn QET tokens for correctly answering quizzes, with higher scores resulting in greater rewards. Our leaderboard system promotes healthy competition and continuous engagement.

### Problem Statement

Despite growing interest in blockchain technology, there remains a significant knowledge gap for newcomers. Traditional education models fail to engage users long-term or provide immediate value for their learning efforts.

### Solution

QuizETH creates a self-sustaining educational ecosystem where:
- Users are financially rewarded for acquiring knowledge
- Engagement is incentivized through a token economy
- Competition drives continuous learning via leaderboards
- Educational content adapts to user performance using AI

## ✨ Features

- **Learn-to-Earn Mechanism**: Complete quizzes to earn QET tokens
- **Progressive Difficulty**: AI-powered quiz generation that adapts to user knowledge level
- **Competitive Leaderboards**: Top performers displayed on-chain for transparency
- **Token Rewards**: Tiered reward system based on quiz scores
- **User Analytics**: Track your progress and improvement over time
- **Token Economy**: Sustainable tokenomics with fixed supply and controlled distribution

## 🏗️ Architecture

QuizETH combines frontend, backend, and blockchain components:

```
┌─────────────────┐      ┌───────────────┐      ┌───────────────────┐
│                 │      │               │      │                   │
│  User Interface │◄────►│  API Backend  │◄────►│  Ethereum Network │
│  (React.js)     │      │  (Node.js)    │      │  (QuizETH Smart   │
│                 │      │               │      │   Contracts)      │
└─────────────────┘      └───────────┬───┘      └───────────────────┘
                                     │
                                     ▼
                           ┌─────────────────┐
                           │                 │
                           │  AI Quiz Engine │
                           │  (GPT-4)        │
                           │                 │
                           └─────────────────┘
```

## 💡 Smart Contract

The QuizETH platform is powered by an ERC20 token contract with additional functionality for:

- **Score Submission**: Users submit quiz scores to earn rewards
- **Reward Distribution**: Automatic calculation and allocation of token rewards
- **Leaderboard Management**: On-chain tracking of top performers
- **Reward Claiming**: Users can claim their accumulated rewards at any time

### Key Contract Features

- Built with Solidity 0.8.29
- Implements OpenZeppelin's ERC20, Ownable, and ReentrancyGuard standards
- Security features to prevent common attacks
- Gas-optimized for user interactions

## 🔧 Technical Implementation

### Smart Contract Details

The RewardToken contract manages quiz scores, rewards, and leaderboards:

- **Token Supply**: 1 billion QET tokens (with 18 decimals)
- **User Tracking**: Stores highest scores, participation metrics, and pending rewards
- **Reward Formula**: (score × 10 + 10) tokens per quiz
- **Leaderboard**: Maintains top 10 performers on-chain
- **Security**: Implements reentrancy protection and ownership controls

### Frontend Integration

Our dApp connects to the smart contract using:
- Web3.js/ethers.js for blockchain interaction
- MetaMask wallet integration for transactions
- React for responsive UI/UX
- Real-time score and leaderboard updates

## 🎮 Demo

[View Live Demo](https://quizeth.example.com) | [Video Walkthrough](https://youtube.com/quizeth-demo)

![QuizETH Demo](https://via.placeholder.com/800x450?text=QuizETH+Demo)

## ⚙️ Installation & Setup

### Prerequisites

- Node.js v16+
- npm or yarn
- MetaMask or similar Ethereum wallet

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/ikhwanhsn/quiz-eth.git
cd quiz-eth
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server:
```bash
npm run dev
```

### Smart Contract Deployment

1. Configure your deployment network in `hardhat.config.js`
2. Deploy using Hardhat:
```bash
npx hardhat run scripts/deploy.js --network <network-name>
```

## 🚀 Future Roadmap

### Phase 1: Post-Hackathon (Q2 2025)
- Implement mobile-responsive design
- Expand quiz categories
- Add social sharing features

### Phase 2: Growth (Q3 2025)
- Launch community-created quizzes
- Implement governance mechanisms
- Add staking rewards for long-term holders

### Phase 3: Expansion (Q4 2025)
- Cross-chain compatibility
- Educational NFT rewards
- DAO-governed educational content

## 👥 Team

- **[Ikhwanul Husna]** - Fullstack Web3 & AI
- **[Marvel Michael]** - Smart Contract Engineer
- **[Arjuna Marcelino]** - Frontend Developer
- **[Aditya Wisnu]** - Frontend Developer

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">Built with ❤️ for the Educhain Hackathon</p>
