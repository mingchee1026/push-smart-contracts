const deploy = {
  network: {
    mainnet: {
      version: 1
    },
    goerli: {
      version: 1
    },
    kovan: {
      version: 1
    },
    ropsten: {
      version: 1
    },
    rinkeby: {
      version: 1
    },
    hardhat: {
      version: 1
    },
    localhost: {
      version: 1
    }
  },
  args: {
    pushTokenAddress: null,
    commUnlockedContract: null,
    secondaryWalletAddress: null,
    amountETHForPool: 1,
    gasInGwei: 130
  }
}

exports.deploy = deploy
