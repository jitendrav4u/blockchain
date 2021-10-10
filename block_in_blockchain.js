class Block {
    constructor(index, previousHash, data, hash, timestamp) {
        this.index = index;
        this.previousHash = previousHash.toString();
        this.data = data;
        this.hash = hash.toString();
        this.timestamp = timestamp;
    }
}
