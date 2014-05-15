/* global describe, it */

(function() {
    'use strict';

    //Test the PerfIt function; pass in a closure e.g. counter and verify that it is indeed called that many times
    describe('Give it some context', function() {
        describe('maybe a bit more context here', function() {
            it('should run here few assertions', function() {
                console.log('in here');
                var code = 'function () { return 2; }',
                        wrappedCode = '(' + code + ')()';

                //assert.equal(wrappedCode, codeWrapper(code));
            });
        });
    });
})();
