'use strict';
//TODO: expose default maxRunValue and stepValue
var svgHeight = 100;

var perfIt = function(codeToRun, repeatCount) {
    var start = window.performance.now();
    for (var i = 0; i < repeatCount; i++) {
        eval(codeToRun);
    }
    var end = window.performance.now();
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

    //Create the Scale we will use for the Axis
    var axisScale = d3.scale.linear()
            .domain([0, 10000])
            .range([0, 400]);

    //Create the Axis
    var xAxis = d3.svg.axis()
            .scale(axisScale);


    //Create an SVG group Element for the Axis elements and call the xAxis function
    var xAxisGroup = plotArea.append("g")
            .call(xAxis);
};

var setupCodeMirror = function() {
    var configOptions = {
        value: "function myScript(){return 100;}\n",
        lineNumbers: true,
        matchBrackets: true,
        mode: "javascript",
        theme: "cobalt"
    },
    myCodeMirror = CodeMirror.fromTextArea(document.getElementById('codebox'), configOptions);
    myCodeMirror.setSize("100%", 300);
    return myCodeMirror;
};

var codeWrapper = function(code, args) {
    //wraps code in an IIFE
    return "(" + code + ")"
            + "(" + args + ")";
}

window.onload = function() {
    var codebox = setupCodeMirror();

    $('#perf').on('click', function(e) {
        console.log('starting');
        var code = codebox.getValue(),
                wrappedCode,
                graphData;

        wrappedCode = codeWrapper(code, "");
        graphData = timeIt(code);

        console.log('Result', graphData);
        plotIt(graphData);
    });
};