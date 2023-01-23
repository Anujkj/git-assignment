const SortArray = function(originalArray){
    this._originalArray = originalArray;
    this._sortedArray = [].concat(originalArray).sort((a,b) => a-b);
}

SortArray.prototype.sortArray = function(objectArray){

}

SortArray.prototype.getSortedArray = function(){
    return this._sortedArray;
}

const SortObjectArray = function(originalArray){
    SortArray.call(this, originalArray);
}
SortObjectArray.prototype = Object.create(SortArray.prototype);

