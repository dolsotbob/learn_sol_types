import * as dotenv from "dotenv";
dotenv.config();
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  // 1) 기본 네트워크 설정 
  defaultNetwork: "kaia_testnet",

  // 2) 네트워크 구성 
  networks: {
    hardhat: {},
    kaia_testnet: {
      url: process.env.KAIA_TESTNET_URL || "https://public-en-kairos.node.kaia.io", // KAIA 테스트넷 RPC URL 설정
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 1001,
      gas: "auto",
      gasPrice: "auto",
    },
  },

  // 3) 솔리디티 설정 
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "paris", // EVM 타겟: 파리 (Merge 이후 환경)
    },
  },

  // 4) 파일 경로 설정 
  paths: {
    root: "./",
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },

  mocha: {
    timeout: 4000,
  },

};

export default config;
