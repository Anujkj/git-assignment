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
    
    let key = this._keyField;
    let result = [];
    data.map((obj) => {
        if(obj.key){
            result.push(obj.key);
        }
    });
    return result;
}

const data = new MetadataParser(2.0, "A", "key");

console.log(data.getVersion(), data.getChannel(), data.getKeyField());


let newData = [{"key":"1"},{"newKey":"2"}, {"key":"3"}, {"key":"4"}];
console.log(data.getArray(newData));