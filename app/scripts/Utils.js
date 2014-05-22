'use strict';
function Utils() {
}
;

Utils.prototype.max = function(objList, comparisionField) {
    var result = -Infinity,
            maxSoFar = -Infinity;

    objList.forEach(function(obj, index, arr) {
        var fieldValue = obj[comparisionField];
        if (fieldValue > maxSoFar) {
            maxSoFar = fieldValue;
            result = obj;
        }
    });

    return result;
};

Utils.prototype.min = function(objList, comparisionField) {
    var result = -Infinity,
            minSoFar = +Infinity;

    objList.forEach(function(obj, index, arr) {
        var fieldValue = obj[comparisionField];
        if (fieldValue < minSoFar) {
            minSoFar = fieldValue;
            result = obj;
        }
    });

    return result;
};
