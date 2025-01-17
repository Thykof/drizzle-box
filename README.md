# Introduction to decentralized application

*This is a fork of [drizzle-box](https://www.trufflesuite.com/boxes/drizzle)*

This project showcases how to create a decentralized application on the Ethereum blockchain, with smart contracts in **Solidity** and a frontend with **React**, with the **Drizzle** library.

## Tools/tech

 - [Ethereum](https://ethereum.org): blockchain
 - [Truffle](https://www.trufflesuite.com): blockchain development framework
 - [Solidity](https://docs.soliditylang.org): programming language for smart contract
 - [Web3](https://web3js.readthedocs.io): JavaScript library for interaction with the blockchain
 - [Ganache](https://www.trufflesuite.com/ganache): development blockchain
 - [MetaMask](https://metamask.io): crypto wallet
 - [React](https://reactjs.org): frontend framework
 - [Drizzle](https://www.trufflesuite.com/drizzle): JavaScript library for store management in React

## Setup
Install node modules requirements:

    npm install -g truffle
    npm install -g ganache-cli
    npm install -g create-react-app

Then install the dependencies:

    npm install

    cd app
    npm install

## Smart contract
Start the development blockchain on a separate terminal:

    ganache-cli

Compile: `truffle compile`

Tests: `truffle test`

Deploy: `truffle migrate`

## Frontend application
Open a terminal in the `app` folder.

Run the application: `npm run start`. It serves at <http://localhost:3000>.

Tests: `npm run test`

Build: `npm run build`
