const SHA256 = require('crypto-js/sha256')

class Block {
  // index is where the blockchain starts

  // previoushash contains the hash of the previous block

  constructor(index, timestamp, data, previousHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = '';
  }
  // SHA256 is not available in JS so we have to import a library
  // npm install --save crypto.js

  calculateHash(){
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();

  }


}
class Blockchain{
  constructor(){
    this.chain = [this.createGenesisBlock()];


  }
  // genesis block

  createGenesisBlock(){
    return new Block(0, "31/08/2022", "Inflation is a Curse","0");

  }

  // some useful methods for future.
  getLatestBlock(){
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock){
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }
}

let bangcoin = new Blockchain();
bangcoin.addBlock(new Block(1,))