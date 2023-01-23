const SortArray = function(originalArray){
    this._originalArray = originalArray;
    this._sortedArray = [].concat(originalArray).sort((a,b) => a-b);
}

SortArray.prototype.getOriginalArray = function(){
    return this._originalArray;
}

SortArray.prototype.getSortedArray = function(){
    return this._sortedArray;
}

const SortObjectArray = function(originalArray){
    SortArray.call(this, originalArray);
}
SortObjectArray.prototype = Object.create(SortArray.prototype);

SortObjectArray.prototype.sortArray = function(){
    return this._sortedArray;
}

let data = [2,4,7,1,13,5];

const obj = new SortArray(data);
console.log(obj.getSortedArray(), obj.getOriginalArray());

const newData = [{"1":"1"}, {"3":"3"}, {"2":"2"}];

let newObj = new SortObjectArray(newData);
console.log(newObj.sortArray());