'use strict';
//TODO: expose default maxRunValue and stepValue
var svgHeight = 100;

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
    var results = [],
            maxRunCount = maxRunValue || 1000,
            stepValue = runIncrement || 10,
            runTime = 0,
            runCount = 10;

    while (runCount <= maxRunCount) {
        runTime = perfIt(codeToRun, runCount);
        results.push({
            'runCount': runCount,
            'runTime': runTime
        });
        runCount *= stepValue;
    }

    return results;
};

//TODO: Eliminate all svgHeight; find a way to pass it in properly
// Create hidden div to serve as container for svg icon and chart
var lineFun = d3.svg.line()
        .x(function(runInfo) {
            return runInfo.runCount;
        })
        .y(function(runInfo) {
            return svgHeight - runInfo.runTime;
        })
        .interpolate('linear');

//TODO; Plot config should be passed in; same applies to svg dom element selector
var plotIt = function(plotData) {
    var plotArea = d3.select('#plotArea');

    plotArea.append('path')
            .attr({
                d: lineFun(plotData),
                'stroke': 'purple',
                'stroke-width': 2,
                'fill': 'none'
            });
};

var setupCodeMirror = function() {
    var configOptions = {
        mode: "javascript",
        lineNumbers: true,
        value: "function myScript(){return 100;}\n"
    },
    myCodeMirror = CodeMirror.fromTextArea(d3.select('#codebox')[0][0], configOptions);
};

$('#perf').on('click', function(e) {
    console.log('starting');
    var code = $('#codebox').val(),
            graphData = timeIt(code);

    console.log('Result', graphData);
    plotIt(graphData);
});