require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net property grace entire bubble slogan'; 
let testAccounts = [
"0x064743905b9b6cf2bd86653c52d847fe6f351e1a52700fe201284d7dc01c52d8",
"0x4f00088559c86cc2a4b749747dcf27d069c8bbc6b50d5538af093d62f9d7f91b",
"0xd7a8cde7f6d2520c97f2684fbe2f06d178af251d7f267acb775f2a09b2c919e5",
"0x6790813b1fecf167531edd36b2a20adde2fd90dfba0f8a7a2a3883449a38d6cb",
"0xd09216c9693f8961df4e01a1f386216cb9d47cbe95bdacecb352ae5e38d6b7e9",
"0x6b7b4c422f150cb981bf4693f4f9fd1dd3b8045381dff2bd0d5ea6352255e0a7",
"0xdb2de2f1e6ae98f79a151ef906a12405bc1c4e69ab3178a2dbb98d8f0a2dac83",
"0xfe48e07a3aeba411798b5426f567310b18dec6e00bf29206a7f8eb0eb176ae7b",
"0xf7d1ce71d9e8574188c346edba1f246044666e9247b291cff4050ab53bf82f08",
"0xeb2a4bd20d1d44b052bd792dbe957eca4c19e6a15326080c9369777077ff6403"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

