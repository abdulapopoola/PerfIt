'use strict';
//TODO: expose default maxRunValue and stepValue

var perfIt = function(codeToRun, repeatCount) {
    var start = +new Date();
    for (var i = 0; i < repeatCount; i++) {
        eval(codeToRun);
    }
    var end = +new Date();
    var diff = end - start;
    return diff;
};

var timeIt = function(codeToRun, maxRunValue, runIncrement) {
    //TODO: Add error checking - values less than stepValue, maxRunCount etc
    var results = {},
            maxRunCount = maxRunValue || 1000,
            stepValue = runIncrement || 10,
            runTime = 0,
            runCount = 10;

    while (runCount <= maxRunCount) {
        runTime = perfIt(codeToRun, runCount);
        results[runCount] = runTime;
        runCount *= stepValue;
    }

    return results;
};

var plotIt = function() {

};


$('#perf').on('click', function(e) {
    console.log('starting');
    var code = $('#codebox').val(),
            xx = timeIt(code);

    console.log('Result', xx);
});