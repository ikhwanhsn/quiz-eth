# 🧠 QuizETH – Learn Web3. Earn Tokens.
![QuizWeb3 Interface](https://i.ibb.co.com/rGSjzr0Y/quizeth-display.png)
A submission for the **EduChain Hackathon**, QuizETH is a gamified education platform on the blockchain that rewards users with tokens for learning about Web3 through quizzes. It also features an AI chatbot assistant that helps users understand blockchain concepts interactively.

## 🔗 Project Links

- **🌐 Project Website:** [QuizETH](https://quiz-eth.vercel.app/)  
- **📹 Demo Video:** [Youtube](https://youtu.be/GVR_3waQBLc)
- **📄 Documentation:** [GitHub Repository](https://github.com/ikhwanhsn/quiz-eth/)  
- **📝 Smart Contract Address:** `0xc10DB6F6F48528BF8DD7Ea6F826a50E3aFd04f8a`  
- **🔍 View on BlockScout:** [Deployed Contract on EDU Chain Testnet](https://edu-chain-testnet.blockscout.com/address/0xc10DB6F6F48528BF8DD7Ea6F826a50E3aFd04f8a)

---

## 🌟 Overview

**QuizETH** is an on-chain quiz platform built to incentivize learning. Users can take Web3 and blockchain-related quizzes, get rewarded with tokens based on their score, and even see how they rank on a global leaderboard. 

### Key Features

- 🎓 **Educational Quiz Platform** – Web3 and blockchain-focused questions.
- 🧠 **AI Chatbot Assistant** – Integrated assistant to guide users through Web3 topics.
- 💰 **Token Rewards** – Users earn $QET (QuizETH Token) for participating and scoring.
- 🏆 **On-Chain Leaderboard** – Top scorers are showcased and ranked live.
- 🔐 **Secure Smart Contract** – Built with OpenZeppelin libraries for safety and ownership.

---

## 🚀 How It Works

### 1. Take a Quiz
Users answer a series of static, curated questions related to blockchain and Web3 technologies.

### 2. Submit Score
After completing a quiz, users call the `submitScore()` function with their score (max 10). Their reward is calculated based on score:

### 3. Earn & Claim Rewards
Users accumulate rewards and can claim them anytime using the `claimReward()` function. Tokens are transferred securely from the contract owner.

### 4. Climb the Leaderboard
The top 10 scores are stored on-chain in a leaderboard. Submit your best scores to rank higher!

---

## 💻 Smart Contract Details

- **Token Name:** QuizETH Token
- **Symbol:** QET
- **Initial Supply:** 1,000,000,000 QET
- **Decimals:** 18

### 🔐 Built With

- [Solidity ^0.8.29](https://soliditylang.org/)
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts)
  - `ERC20`, `Ownable`, `ReentrancyGuard`

---

## 🔎 Smart Contract Functions

| Function | Description |
|---------|-------------|
| `submitScore(uint256 _score)` | Submits a user's score (0-10), updates user stats, and calculates rewards. |
| `claimReward()` | Lets a user claim their accumulated QET tokens. |
| `getLeaderboard()` | Returns the top 10 leaderboard entries. |

### Structs

```solidity
struct User {
    uint256 highestScore;
    uint256 totalQuizPlayed;
    uint256 reward;
}

struct LeaderboardEntry {
    address player;
    uint256 score;
}
```

## 🧠 AI Educational Assistant

To enhance the learning experience, **QuizETH** includes a conversational AI chatbot trained on Web3 concepts. It helps users by:

- Explaining blockchain fundamentals  
- Clarifying quiz questions  
- Providing resources and guidance for further study  

---

## 🧪 Example Flow

1. Alice connects her wallet and takes a quiz.  
2. She scores 8/10 and submits it via `submitScore(8)`.  
3. Her reward is calculated: `(8 * 10 + 10) * 10^18 = 90 QET`.  
4. She sees her name on the leaderboard.  
5. She later calls `claimReward()` to receive her 90 QET tokens.  

---

## 🛠️ Installation & Deployment

```bash
# Install dependencies
npm install

# Compile smart contract
npx hardhat compile

# Deploy to a network (e.g. localhost or testnet)
npx hardhat run scripts/deploy.js --network <network>
```

## ✅ TODO / Roadmap

- [x] Token reward mechanism  
- [x] On-chain leaderboard  
- [x] Quiz submission logic  
- [x] AI chatbot integration  
- [ ] Dynamic quizzes from smart contract  
- [ ] NFT achievement badges  
- [ ] Mobile responsive UI  
- [ ] WalletConnect integration  
- [ ] User profile with stats  

---

## 📄 License

This project is licensed under the **MIT License**.

---

**Happy hacking and learning Web3! 🚀**
