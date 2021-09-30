require('dotenv').config()
require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-etherscan");
module.exports = {
    defaultNetwork: "hardhat",
    solidity: {
        version:"0.8.0",
        settings: {
            optimizer: {
                enabled: false,
                runs: 1000
            }
        }
    },
    etherscan: {
        apiKey: "BLABLA"
    },
    networks : {
        hardhat: {
            forking: {
                url: "https://eth-mainnet.alchemyapi.io/v2/BLABLA"
            }
        },
        mainnet : {
            url : "https://mainnet.infura.io/v3/BLABLA",
            accounts : [""],
            chainId : 1,
          gasPrice: 60000000000
        },
        rinkeby: {
            url : "https://rinkeby.infura.io/v3/BLABLA",
            accounts: [""],
            chainId: 4
        },
    }
};
