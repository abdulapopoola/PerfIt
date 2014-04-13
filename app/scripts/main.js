'use strict';

var perfIt = function() {
    var code = $('#codebox').val();
    var start = +new Date();  // log start timestamp
    eval(code);
    var end = +new Date();  // log end timestamp
    var diff = end - start;
    console.log(diff);
};

$('#perf').on('click', perfIt);