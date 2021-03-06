require('dotenv').config()
require("@nomiclabs/hardhat-waffle");


const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL;
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

const projectId = '4dc5c4b05b664f0ab7610f1adb039c7c'
const fs = require('fs')
const keyData = fs.readFileSync('./p-key.txt', {
  encoding: 'utf8', flag: 'r'
});

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [keyData]
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${projectId}`,
      accounts: [keyData]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    rinkeby: {
      url: ALCHEMY_API_URL,
      accounts: [`0x${RINKEBY_PRIVATE_KEY}`]
    }
  }
};
