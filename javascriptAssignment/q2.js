const MetadataParser = function(version, channel, keyField){
    this._version = version;
    this._channel = channel;
    this._keyField = keyField;
};

MetadataParser.prototype.getVersion = function(){
    return this._version;
}

MetadataParser.prototype.getChannel = function(){
    return this._channel;
}

MetadataParser.prototype.getKeyField = function(){
    return this._keyField;
}

MetadataParser.prototype.getArray = function(data){
    // loop find data and put in array
}

const data = new MetadataParser(2.0, "A", "key");

console.log(data.getVersion(), data.getChannel(), data.getKeyField());