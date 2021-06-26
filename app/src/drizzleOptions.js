import Web3 from "web3";
import SimpleStorage from "./contracts/SimpleStorage.json";

const options = {
  web3: {
    block: false,
    customProvider: new Web3(Web3.givenProvider), // connect with MetaMask
    // customProvider: new Web3("ws://localhost:8545"), // connect directly to ganache
  },
  contracts: [SimpleStorage],
};

export default options;
