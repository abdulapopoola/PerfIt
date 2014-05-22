/* global describe, it */

(function() {
    'use strict';
    //Test the PerfIt function; pass in a closure e.g. counter and verify that it is indeed called that many times
    describe('Code Wrapper', function() {
        describe('Wrapping', function() {
            it('should wrap code effectively', function() {
                var code = 'function () { return 2; }',
                        arg = 2,
                        wrappedCode = '(' + code + ')(' + arg + ')';

                assert.equal(wrappedCode, codeWrapper(code, 2));
            });
        });
    });

    describe('Utility functions', function() {
        var objList = [
            {val: 3},
            {val: 4},
            {val: 5},
            {val: 6},
            {val: 7}
        ];

        describe('MIN', function() {
            it('Utils.min should find the minimum for a field', function() {
                var min = Utils.minValueForField(objList, 'val');

                assert.equal(min, 3);
            });
        });
        describe('Max', function() {
            it('Utils.max should find the maximum for a field', function() {
                var max = Utils.maxValueForField(objList, 'val');

                assert.equal(max, 7);
            });
        });
    });
})();
