import "@rainbow-me/rainbowkit/styles.css";
import { Chain, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { sepolia } from "wagmi/chains";

const educhainTestnet = {
  id: 656476,
  name: "EduChain Testnet",
  iconUrl: "https://opencampus.xyz/favicon.ico",
  iconBackground: "#fff",
  nativeCurrency: {
    name: "EduToken",
    symbol: "EDU",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.open-campus-codex.gelato.digital"],
    },
    public: {
      http: ["https://rpc.open-campus-codex.gelato.digital"],
    },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://opencampus-codex.blockscout.com/",
    },
  },
  testnet: true,
} as const satisfies Chain;

export const config = getDefaultConfig({
  appName: "Template Fullstack Web3",
  projectId: process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || "",
  chains: [sepolia, educhainTestnet],
  ssr: true,
});
