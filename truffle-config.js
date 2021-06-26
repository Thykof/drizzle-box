const path = require("path");
const HDWalletProvider = require('@truffle/hdwallet-provider')

const URL_ROPSTEN = 'https://ropsten.infura.io/v3/c365267ea69443cf9af909a295e1b8b5';

const MNEMONIC = 'spoil shiver salon alert paper robust budget recall stick possible jaguar liar';

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider(MNEMONIC, URL_ROPSTEN)
      },
      network_id: 3,
      skipDryRun: true,
      networkCheckTimeout: 1e9
    }
  }
};
