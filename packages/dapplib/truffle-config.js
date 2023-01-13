require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile purpose install case fresh that'; 
let testAccounts = [
"0xdc83805bd03a7593c499743e81833b5fd63e8bc9b6915d5b36af69970d4842b7",
"0xe2148e877e8632ca0acd5bcf57637dd16b2d8a46449a801db92b25a26c8d1e92",
"0x8d90cceb07d37487e375e41ad0eab36894d639918508e0155e7ff06499c6ee0c",
"0xeda3dcc0cf9e8a4fa65563d7c2637707164c81af68cebb2e9ba9bb9ba4d18241",
"0xa90d2a0269607d35b6ff4670f746b1e4b8b144025ed038695aa13b43db223ad2",
"0x56730be4b66ba9608f3c7dfb13a64bcdeec1d3b39ab4702444b8e85fd3e78cc7",
"0x597dfd2937de00bf99675db5684f5bed0a0db9fea3ddf5dde5dce0e2568451fe",
"0x8c23a54d4e13007346205a389d93ca3fb9bac19d1fceaf7df65f55aee89c9f36",
"0x9a32bb91262d9277ec0eb633821030d4f40a5b233667dd8a9f67539e27b796db",
"0x8cf5c295de2ac5c9e48810166fc46b284e95b3cc49edb94d4e5d5674934a4a77"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

