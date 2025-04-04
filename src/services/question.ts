const allQuestions = [
  {
    question: "What is Ethereum's native currency?",
    options: ["Bitcoin", "Ether", "Solana", "BNB"],
    answer: "Ether",
  },
  {
    question: "What does DeFi stand for?",
    options: [
      "Decentralized Finance",
      "Digital Finance",
      "Decentralized Files",
      "Defensive Finance",
    ],
    answer: "Decentralized Finance",
  },
  {
    question: "Which consensus mechanism does Ethereum use after The Merge?",
    options: [
      "Proof of Work",
      "Proof of Stake",
      "Delegated PoS",
      "Hybrid PoW/PoS",
    ],
    answer: "Proof of Stake",
  },
  {
    question: "Who founded Ethereum?",
    options: [
      "Satoshi Nakamoto",
      "Vitalik Buterin",
      "Elon Musk",
      "Charles Hoskinson",
    ],
    answer: "Vitalik Buterin",
  },
  {
    question: "What is the block time of Ethereum?",
    options: ["15 seconds", "10 minutes", "5 minutes", "30 seconds"],
    answer: "15 seconds",
  },
  {
    question: "Which Ethereum Improvement Proposal (EIP) enabled The Merge?",
    options: ["EIP-1559", "EIP-3675", "EIP-2929", "EIP-4844"],
    answer: "EIP-3675",
  },
  {
    question: "What is a smart contract?",
    options: [
      "A legal document",
      "Self-executing code on a blockchain",
      "A hardware wallet",
      "A type of cryptocurrency",
    ],
    answer: "Self-executing code on a blockchain",
  },
  {
    question:
      "What programming language is most commonly used for Ethereum smart contracts?",
    options: ["JavaScript", "Python", "Solidity", "C++"],
    answer: "Solidity",
  },
  {
    question:
      "What is the term for the fee paid to process transactions on Ethereum?",
    options: ["Tax", "Fee", "Gas", "Toll"],
    answer: "Gas",
  },
  {
    question: "What is an ERC-20 token?",
    options: [
      "A hardware wallet",
      "A governance token",
      "A fungible token standard on Ethereum",
      "An NFT standard",
    ],
    answer: "A fungible token standard on Ethereum",
  },
  {
    question: "What does NFT stand for?",
    options: [
      "New Financial Token",
      "Non-Fungible Token",
      "Network File Transfer",
      "Node Function Type",
    ],
    answer: "Non-Fungible Token",
  },
  {
    question: "Which layer 2 solution bundles multiple transactions into one?",
    options: ["Rollups", "Sidechains", "Plasma", "State channels"],
    answer: "Rollups",
  },
  {
    question: "What is the maximum supply of Ether?",
    options: ["21 million", "100 million", "1 billion", "No maximum supply"],
    answer: "No maximum supply",
  },
  {
    question: "What is a DAO?",
    options: [
      "Decentralized Autonomous Organization",
      "Digital Asset Ownership",
      "Dynamic Application Oracle",
      "Distributed Access Operation",
    ],
    answer: "Decentralized Autonomous Organization",
  },
  {
    question: "Which of these is NOT a layer 2 scaling solution for Ethereum?",
    options: ["Optimism", "Arbitrum", "Polygon", "Cardano"],
    answer: "Cardano",
  },
  {
    question: "What is the primary goal of EIP-1559?",
    options: [
      "Increase block size",
      "Implement sharding",
      "Make gas fees more predictable",
      "Reduce energy consumption",
    ],
    answer: "Make gas fees more predictable",
  },
  {
    question: "Which Ethereum testnet was deprecated after The Merge?",
    options: ["Goerli", "Sepolia", "Rinkeby", "Holesky"],
    answer: "Rinkeby",
  },
  {
    question: "What is the Beacon Chain?",
    options: [
      "A type of sidechain",
      "The PoS consensus layer of Ethereum",
      "A block explorer",
      "A centralized exchange",
    ],
    answer: "The PoS consensus layer of Ethereum",
  },
  {
    question: "What happens to transaction fees after EIP-1559?",
    options: [
      "All go to miners",
      "All go to validators",
      "A portion is burned",
      "Distributed to token holders",
    ],
    answer: "A portion is burned",
  },
  {
    question: "What is the minimum amount of ETH needed to become a validator?",
    options: ["1 ETH", "16 ETH", "32 ETH", "64 ETH"],
    answer: "32 ETH",
  },
  {
    question: "Which year was Ethereum launched?",
    options: ["2013", "2014", "2015", "2016"],
    answer: "2015",
  },
  {
    question: "What is the EVM?",
    options: [
      "Ethereum Visual Monitor",
      "Ethereum Virtual Machine",
      "Enhanced Validation Method",
      "Eternal Value Mechanism",
    ],
    answer: "Ethereum Virtual Machine",
  },
  {
    question: "What is a 'wei'?",
    options: [
      "The smallest denomination of Ether",
      "A type of staking reward",
      "An Ethereum wallet",
      "A consensus algorithm",
    ],
    answer: "The smallest denomination of Ether",
  },
  {
    question: "What is the primary goal of the Ethereum 2.0 upgrade?",
    options: [
      "Change the logo",
      "Improve scalability",
      "Change the consensus mechanism only",
      "Make ETH deflationary",
    ],
    answer: "Improve scalability",
  },
  {
    question: "What is a 'hard fork'?",
    options: [
      "A software upgrade that is backward compatible",
      "A cutlery utensil used by miners",
      "A software upgrade that is not backward compatible",
      "A validator reward",
    ],
    answer: "A software upgrade that is not backward compatible",
  },
  {
    question: "What is 'sharding' in the context of Ethereum?",
    options: [
      "Breaking pieces of the blockchain",
      "Splitting the network into multiple parallel chains",
      "Combining multiple chains into one",
      "Encrypting blockchain data",
    ],
    answer: "Splitting the network into multiple parallel chains",
  },
  {
    question: "What is the main function of MetaMask?",
    options: [
      "Mining Ethereum",
      "Validating transactions",
      "Acting as a wallet and dApp browser",
      "Creating smart contracts",
    ],
    answer: "Acting as a wallet and dApp browser",
  },
  {
    question: "Which algorithm was used by Ethereum for Proof of Work?",
    options: ["SHA-256", "Ethash", "Scrypt", "X11"],
    answer: "Ethash",
  },
  {
    question: "What is the purpose of an Ethereum node?",
    options: [
      "To mine new blocks",
      "To validate transactions and store blockchain data",
      "To create tokens",
      "To provide liquidity",
    ],
    answer: "To validate transactions and store blockchain data",
  },
  {
    question: "What is 'slashing' in Ethereum PoS?",
    options: [
      "A way to reduce gas fees",
      "A penalty for validator misbehavior",
      "A method of token burning",
      "A type of transaction",
    ],
    answer: "A penalty for validator misbehavior",
  },
  {
    question: "What is an 'uncle block' in Ethereum?",
    options: [
      "A special reward block",
      "An invalid block",
      "A valid block not included in the main chain",
      "A block with no transactions",
    ],
    answer: "A valid block not included in the main chain",
  },
  {
    question: "Which ERC standard is used for NFTs?",
    options: ["ERC-20", "ERC-721", "ERC-777", "ERC-1155"],
    answer: "ERC-721",
  },
  {
    question: "What is 'gas limit' in Ethereum?",
    options: [
      "The minimum gas required for a transaction",
      "The maximum gas a block can use",
      "The current gas price",
      "The gas used by smart contracts",
    ],
    answer: "The maximum gas a block can use",
  },
  {
    question: "What is the primary function of an Ethereum Oracle?",
    options: [
      "To mine blocks",
      "To connect blockchain with off-chain data",
      "To validate transactions",
      "To create tokens",
    ],
    answer: "To connect blockchain with off-chain data",
  },
  {
    question: "What is a dApp?",
    options: [
      "Digital Application",
      "Decentralized Application",
      "Developer Application",
      "Direct Application",
    ],
    answer: "Decentralized Application",
  },
  {
    question: "What is 'finality' in blockchain?",
    options: [
      "The process of mining a block",
      "The guarantee that transactions cannot be altered",
      "The end of a blockchain",
      "The process of creating a smart contract",
    ],
    answer: "The guarantee that transactions cannot be altered",
  },
  {
    question: "What is the name of Ethereum's Shanghai upgrade?",
    options: ["The Merge", "Shapella", "Serenity", "Spurious Dragon"],
    answer: "Shapella",
  },
  {
    question:
      "Which of these is a privacy-focused layer 2 solution on Ethereum?",
    options: ["Optimism", "Polygon", "Arbitrum", "Aztec"],
    answer: "Aztec",
  },
  {
    question: "What is a 'block explorer'?",
    options: [
      "A tool to mine blocks",
      "A tool to view blockchain data",
      "A type of wallet",
      "A consensus algorithm",
    ],
    answer: "A tool to view blockchain data",
  },
  {
    question: "What does MEV stand for in Ethereum?",
    options: [
      "Maximum Extractable Value",
      "Multiple Ethereum Validators",
      "Miner Extracted Value",
      "Minimum Ethical Validation",
    ],
    answer: "Maximal Extractable Value",
  },
  {
    question: "What is the purpose of ENS (Ethereum Name Service)?",
    options: [
      "To create domains on the internet",
      "To register Ethereum validators",
      "To convert addresses to human-readable names",
      "To verify smart contracts",
    ],
    answer: "To convert addresses to human-readable names",
  },
  {
    question: "What is the main advantage of zk-Rollups?",
    options: [
      "Higher transaction fees",
      "Better security and data availability",
      "Easier to implement",
      "More centralized control",
    ],
    answer: "Better security and data availability",
  },
  {
    question: "Which of these is NOT a property of a blockchain?",
    options: ["Immutability", "Transparency", "Centralization", "Distributed"],
    answer: "Centralization",
  },
  {
    question: "What does EIP stand for?",
    options: [
      "Ethereum Investment Protocol",
      "Ethereum Improvement Proposal",
      "Enhanced Integration Process",
      "Ethereum Interface Program",
    ],
    answer: "Ethereum Improvement Proposal",
  },
  {
    question: "What is a 'liquidity pool' in DeFi?",
    options: [
      "A collection of funds locked in a smart contract",
      "A swimming pool for Ethereum developers",
      "A type of wallet",
      "A centralized exchange",
    ],
    answer: "A collection of funds locked in a smart contract",
  },
  {
    question: "What is 'staking' in Ethereum?",
    options: [
      "Buying ETH",
      "Selling ETH",
      "Locking up ETH to secure the network",
      "Mining ETH",
    ],
    answer: "Locking up ETH to secure the network",
  },
  {
    question:
      "What is the term for the reward validators receive in PoS Ethereum?",
    options: [
      "Block reward",
      "Transaction fee",
      "Interest",
      "Attestation reward",
    ],
    answer: "Attestation reward",
  },
  {
    question: "What is an 'airdrop' in crypto?",
    options: [
      "A type of attack",
      "A free distribution of tokens",
      "A method of staking",
      "A way to burn tokens",
    ],
    answer: "A free distribution of tokens",
  },
  {
    question: "What is 'impermanent loss' in DeFi?",
    options: [
      "The loss of private keys",
      "Value decrease compared to holding",
      "A type of smart contract bug",
      "Gas fees for failed transactions",
    ],
    answer: "Value decrease compared to holding",
  },
  {
    question: "What major Ethereum upgrade followed The Merge?",
    options: ["Shanghai", "London", "Berlin", "Paris"],
    answer: "Shanghai",
  },
  {
    question: "What is the purpose of EIP-4844 (Proto-Danksharding)?",
    options: [
      "To implement full sharding",
      "To reduce gas fees for rollups",
      "To increase block size",
      "To eliminate validators",
    ],
    answer: "To reduce gas fees for rollups",
  },
  {
    question: "What is a 'flash loan' in DeFi?",
    options: [
      "A very fast transaction",
      "An uncollateralized loan repaid in the same transaction",
      "A loan with high interest",
      "A loan for buying NFTs",
    ],
    answer: "An uncollateralized loan repaid in the same transaction",
  },
  {
    question: "What is 'gas gwei' referring to?",
    options: [
      "A unit of gas price",
      "A type of token",
      "A validator reward",
      "A mining algorithm",
    ],
    answer: "A unit of gas price",
  },
  {
    question: "What is the relationship between Ethereum and Solidity?",
    options: [
      "They are competing blockchains",
      "Solidity is a programming language for Ethereum",
      "Solidity is Ethereum's consensus mechanism",
      "Ethereum is built on Solidity",
    ],
    answer: "Solidity is a programming language for Ethereum",
  },
  {
    question: "Which of these is NOT a type of Ethereum account?",
    options: [
      "Contract account",
      "Externally-owned account (EOA)",
      "Validator account",
      "Multi-signature account",
    ],
    answer: "Validator account",
  },
  {
    question: "What is the purpose of an Ethereum RPC?",
    options: [
      "To create transactions",
      "Remote procedure call for interacting with the blockchain",
      "To secure private keys",
      "To mine ETH",
    ],
    answer: "Remote procedure call for interacting with the blockchain",
  },
  {
    question: "What is an Ethereum 'nonce'?",
    options: [
      "A transaction counter for each account",
      "A cryptographic puzzle",
      "A validator's deposit",
      "A smart contract identifier",
    ],
    answer: "A transaction counter for each account",
  },
  {
    question: "What is 'The DAO' in Ethereum history?",
    options: [
      "The first NFT marketplace",
      "An early DAO that was hacked, leading to a hard fork",
      "The original name for MetaMask",
      "The first DeFi application",
    ],
    answer: "An early DAO that was hacked, leading to a hard fork",
  },
  {
    question: "Which of these is NOT a valid state for an Ethereum validator?",
    options: ["Active", "Slashed", "Pending", "Mining"],
    answer: "Mining",
  },
  {
    question: "What is 'calldata' in Ethereum?",
    options: [
      "A type of smart contract",
      "Data included in a transaction call",
      "A validator message",
      "A DeFi protocol",
    ],
    answer: "Data included in a transaction call",
  },
  {
    question: "What is the purpose of the 'require' statement in Solidity?",
    options: [
      "To import libraries",
      "To define functions",
      "To validate conditions and revert if not met",
      "To deploy contracts",
    ],
    answer: "To validate conditions and revert if not met",
  },
  {
    question: "What is Ethereum Classic (ETC)?",
    options: [
      "A testnet for Ethereum",
      "The original Ethereum chain after The DAO fork",
      "An Ethereum Layer 2",
      "A token on Ethereum",
    ],
    answer: "The original Ethereum chain after The DAO fork",
  },
  {
    question: "What is a 'mempool' in blockchain?",
    options: [
      "A memory storage for blocks",
      "A pool of pending transactions",
      "A collection of invalid transactions",
      "A staking pool",
    ],
    answer: "A pool of pending transactions",
  },
  {
    question: "Which of these is a characteristic of an optimistic rollup?",
    options: [
      "Instant finality",
      "Fraud proofs",
      "Zero-knowledge proofs",
      "On-chain validation",
    ],
    answer: "Fraud proofs",
  },
  {
    question: "What is an Ethereum 'event'?",
    options: [
      "A conference for developers",
      "Logged information emitted by smart contracts",
      "A market crash",
      "A new block being mined",
    ],
    answer: "Logged information emitted by smart contracts",
  },
  {
    question: "What is 'yield farming' in DeFi?",
    options: [
      "Mining cryptocurrency",
      "Staking Ethereum",
      "Providing liquidity to earn rewards",
      "Buying NFTs",
    ],
    answer: "Providing liquidity to earn rewards",
  },
  {
    question: "What are 'base fees' in Ethereum after EIP-1559?",
    options: [
      "Minimum validator rewards",
      "The portion of gas fees that is burned",
      "Tips to miners",
      "Transaction costs on Layer 2",
    ],
    answer: "The portion of gas fees that is burned",
  },
  {
    question: "What is the 'priority fee' in Ethereum transactions?",
    options: [
      "A fee paid to skip the queue",
      "A tip paid to validators",
      "A fee for NFT transactions",
      "A fee for staking ETH",
    ],
    answer: "A tip paid to validators",
  },
  {
    question: "What is the purpose of an Ethereum 'ABI'?",
    options: [
      "To encrypt transactions",
      "Application Binary Interface for interacting with contracts",
      "A block identifier",
      "An address book interface",
    ],
    answer: "Application Binary Interface for interacting with contracts",
  },
  {
    question: "What is 'frontrunning' in blockchain?",
    options: [
      "Being first to buy an NFT",
      "Placing a transaction ahead of another to gain advantage",
      "Leading a validator set",
      "Mining the first block",
    ],
    answer: "Placing a transaction ahead of another to gain advantage",
  },
  {
    question: "What is 'composability' in DeFi?",
    options: [
      "Creating complex financial instruments",
      "The ability of protocols to interact with each other",
      "Writing multi-contract systems",
      "Compatibility between blockchains",
    ],
    answer: "The ability of protocols to interact with each other",
  },
  {
    question: "What is ERC-1155 used for?",
    options: [
      "Governance tokens",
      "NFTs only",
      "Multi-token standard for both fungible and non-fungible tokens",
      "Stablecoins",
    ],
    answer: "Multi-token standard for both fungible and non-fungible tokens",
  },
  {
    question: "What is a 'genesis block'?",
    options: [
      "The first block of a blockchain",
      "A special NFT",
      "A block with no transactions",
      "The block that implements a hard fork",
    ],
    answer: "The first block of a blockchain",
  },
  {
    question: "What is the purpose of Ethereum's 'difficulty bomb'?",
    options: [
      "To make mining impossible",
      "To encourage migration to PoS",
      "To prevent 51% attacks",
      "To increase transaction fees",
    ],
    answer: "To encourage migration to PoS",
  },
  {
    question: "What are 'state variables' in Solidity?",
    options: [
      "Variables that store contract state on the blockchain",
      "Variables that track gas prices",
      "Variables that count transactions",
      "Variables that store validator information",
    ],
    answer: "Variables that store contract state on the blockchain",
  },
  {
    question: "What is 'token burning' in cryptocurrency?",
    options: [
      "Setting fire to hardware wallets",
      "Removing tokens from circulation permanently",
      "A consensus mechanism",
      "A token launch method",
    ],
    answer: "Removing tokens from circulation permanently",
  },
  {
    question:
      "What is the difference between EOA and contract accounts in Ethereum?",
    options: [
      "EOAs can initiate transactions, contracts cannot",
      "EOAs earn more gas fees",
      "Contracts can hold more ETH",
      "EOAs cannot interact with smart contracts",
    ],
    answer: "EOAs can initiate transactions, contracts cannot",
  },
  {
    question: "What is 'ETH2' now commonly referred to as?",
    options: [
      "Proof of Stake",
      "The Consensus Layer",
      "Ethereum 2.0",
      "Shanghai Upgrade",
    ],
    answer: "The Consensus Layer",
  },
  {
    question: "What is a 'smart contract wallet'?",
    options: [
      "A hardware wallet for developers",
      "A wallet controlled by smart contract logic",
      "A wallet for storing smart contracts",
      "A wallet with AI capabilities",
    ],
    answer: "A wallet controlled by smart contract logic",
  },
  {
    question: "Which Ethereum client is written in Rust?",
    options: ["Geth", "Nethermind", "Besu", "Erigon"],
    answer: "Erigon",
  },
  {
    question: "What is an 'atomic swap'?",
    options: [
      "A nuclear exchange mechanism",
      "A cross-chain trading method without intermediaries",
      "A type of NFT transaction",
      "A method for upgrading smart contracts",
    ],
    answer: "A cross-chain trading method without intermediaries",
  },
  {
    question: "What is 'metamorphic contract deployment' in Ethereum?",
    options: [
      "Contracts that can change their code",
      "A method to deploy contracts with the same address but different code",
      "Smart contracts that self-destruct",
      "A way to update immutable contracts",
    ],
    answer:
      "A method to deploy contracts with the same address but different code",
  },
  {
    question: "What is the 'CREATE2' opcode used for?",
    options: [
      "Creating NFTs",
      "Deploying contracts at predetermined addresses",
      "Updating existing contracts",
      "Creating ERC-20 tokens",
    ],
    answer: "Deploying contracts at predetermined addresses",
  },
  {
    question: "What is a 'replay attack' in blockchain?",
    options: [
      "Watching transactions multiple times",
      "Reusing a signature from one chain on another",
      "Repeated failed transactions",
      "Spamming the network with transactions",
    ],
    answer: "Reusing a signature from one chain on another",
  },
  {
    question: "What is 'gas optimization' in Ethereum development?",
    options: [
      "Finding cheaper gas stations",
      "Making a contract use less computational resources",
      "Reducing validator costs",
      "Lowering staking requirements",
    ],
    answer: "Making a contract use less computational resources",
  },
  {
    question: "What is the role of the 'keccak256' function in Ethereum?",
    options: [
      "Creating wallet addresses",
      "A cryptographic hash function used in Ethereum",
      "Generating random numbers",
      "Creating private keys",
    ],
    answer: "A cryptographic hash function used in Ethereum",
  },
  {
    question: "What is a 'delegated validator' in Ethereum PoS?",
    options: [
      "A validator elected by governance",
      "A validator that delegates work to others",
      "A third-party entity running validator nodes for users",
      "A validator that can approve hard forks",
    ],
    answer: "A third-party entity running validator nodes for users",
  },
  {
    question: "What is 'total value locked' (TVL) in DeFi?",
    options: [
      "The total amount of ETH staked",
      "The total amount of assets deposited in DeFi protocols",
      "The value of burned tokens",
      "The market cap of all DeFi tokens",
    ],
    answer: "The total amount of assets deposited in DeFi protocols",
  },
  {
    question: "What was the 'London Hard Fork'?",
    options: [
      "The implementation of The Merge",
      "The upgrade that implemented EIP-1559",
      "The creation of Ethereum Classic",
      "The first PoS implementation",
    ],
    answer: "The upgrade that implemented EIP-1559",
  },
  {
    question: "What is a 'multisig wallet'?",
    options: [
      "A wallet that requires multiple signatures to authorize transactions",
      "A wallet that holds multiple cryptocurrencies",
      "A wallet shared by multiple users",
      "A wallet with multiple addresses",
    ],
    answer:
      "A wallet that requires multiple signatures to authorize transactions",
  },
  {
    question: "What is 'contract verification' on block explorers?",
    options: [
      "Checking if a contract is secure",
      "Proving a contract belongs to you",
      "Matching on-chain bytecode with source code",
      "Testing a contract for vulnerabilities",
    ],
    answer: "Matching on-chain bytecode with source code",
  },
  {
    question: "What is EIP-2981?",
    options: [
      "NFT Royalty Standard",
      "Gas Fee Market",
      "Token Metadata Standard",
      "Layer 2 Bridging Protocol",
    ],
    answer: "NFT Royalty Standard",
  },
  {
    question: "What is a 'block proposer' in Ethereum PoS?",
    options: [
      "Any user submitting transactions",
      "A validator selected to create a new block",
      "A special type of miner",
      "A developer deploying smart contracts",
    ],
    answer: "A validator selected to create a new block",
  },
  {
    question: "What is a 'beacon block' in Ethereum?",
    options: [
      "A block with special privileges",
      "A block on the consensus layer",
      "A block with no transactions",
      "The first block of each epoch",
    ],
    answer: "A block on the consensus layer",
  },
  {
    question: "What is 'social recovery' for Ethereum wallets?",
    options: [
      "Recovering funds through social media",
      "Using trusted guardians to regain access",
      "Community fundraising after a hack",
      "Finding lost private keys through social networks",
    ],
    answer: "Using trusted guardians to regain access",
  },
  {
    question:
      "What is the primary purpose of 'EIP-4337' (Account Abstraction)?",
    options: [
      "To implement new token standards",
      "To allow gasless transactions and better wallet UX",
      "To create new consensus mechanisms",
      "To enable cross-chain communication",
    ],
    answer: "To allow gasless transactions and better wallet UX",
  },
  {
    question: "What are 'view functions' in Solidity?",
    options: [
      "Functions that don't modify blockchain state",
      "Functions that can only be called by the contract owner",
      "Functions that return ETH",
      "Functions that create new tokens",
    ],
    answer: "Functions that don't modify blockchain state",
  },
  {
    question: "What is the purpose of the 'fallback function' in Solidity?",
    options: [
      "To handle errors",
      "To receive ETH with no data",
      "To execute when no other function matches",
      "To return unused gas",
    ],
    answer: "To execute when no other function matches",
  },
];

export { allQuestions };
