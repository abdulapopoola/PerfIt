'use strict';

//TODO, wrap as constant in IIFE
var Utils = {
    maxValueForField: function(objList, fieldToCheck) {
        var maxSoFar = -Infinity;

        objList.forEach(function(obj, index, arr) {
            var fieldValue = obj[fieldToCheck];
            if (fieldValue > maxSoFar) {
                maxSoFar = fieldValue;
            }
        });

        return maxSoFar;
    },
    minValueForField: function(objList, fieldToCheck) {
        var minSoFar = +Infinity;

        objList.forEach(function(obj, index, arr) {
            var fieldValue = obj[fieldToCheck];
            if (fieldValue < minSoFar) {
                minSoFar = fieldValue;
            }
        });

        return minSoFar;
    }
};
