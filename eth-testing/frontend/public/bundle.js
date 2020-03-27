var contractABI = [];
var contractAddress = '0x2b9DB21016A612B822DA72b5F09c8f8c66048820';
var web3 = new Web3('http://localhost:9545');
var AdvancedStorage = new web3.eth.Contract(contractABI, contractAddress);

console.log(AdvancedStorage);

web3.eth.getAccounts()
.then(console.log);
