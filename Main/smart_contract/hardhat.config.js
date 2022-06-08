// https://eth-ropsten.alchemyapi.io/v2/Cl_ym0-UGEr_LLenMtuaJDvOtnct77PK

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Cl_ym0-UGEr_LLenMtuaJDvOtnct77PK',
      accounts: ['cf141efbb316adcddde602dfec3c66214df8b9c8eebb0fa2ca9dfcf6a41e796e'],
    
    }
  }
}