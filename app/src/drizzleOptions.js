import Web3 from "web3";
import SimpleStorage from "./contracts/SimpleStorage.json";

const options = () => {
  // Is there is an injected web3 instance?
  if (typeof web3 !== 'undefined') {
    console.log('web3 is injected');
    console.log(web3.currentProvider);
    web3 = new Web3(web3.currentProvider);
  } else {
    // If no injected web3 instance is detected, fallback to Ganache.
    console.log('fallback to Ganache');
    web3 = new Web3(new web3.providers.HttpProvider('http://127.0.0.1:8545'));
  }

  return {
    web3: {
      block: false,
      // customProvider: web3,
      customProvider: new Web3("ws://localhost:8545"), // connect directly to ganache
    },
    contracts: [SimpleStorage],
  }

};

export default options;
