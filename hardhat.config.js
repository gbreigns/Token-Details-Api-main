require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

const ALCHEMY_API_KEY = "KEY";
const BSCSCAN_API_KEY = "";

const DEFAULT_GAS_MULTIPLIER = 1;

const PRIVATE_KEY = "";

module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    bsctest: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [PRIVATE_KEY],
    },
    truffle: {
      url: "http://localhost:24012/rpc",
      timeout: 160000,
      gasMultiplier: DEFAULT_GAS_MULTIPLIER,
    },
    etherscan: {
      url: 'https://testnet.bscscan.com/',
      apiKey: BSCSCAN_API_KEY,
    },
  },
};
