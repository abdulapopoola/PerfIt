/* global describe, it */

(function() {
    'use strict';
    //Test the PerfIt function; pass in a closure e.g. counter and verify that it is indeed called that many times
    describe('Code Wrapper', function() {
        describe('function', function() {
            it('should wrap code effectively', function() {
                var code = 'function () { return 2; }',
                        arg = 2,
                        wrappedCode = '(' + code + ')(' + arg + ')';

                assert.equal(wrappedCode, codeWrapper(code, 2));
            });
        });
    });
})();
