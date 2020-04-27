var srs = require('../');
var fs = require('fs');
var assert = require('assert');

// http://spatialreference.org/ref/esri/102685/
// http://spatialreference.org/ref/sr-org/7058/
describe('maryland ESRI variant', function() {
    it('detects proj if parsed as ESRI::', function(done) {
        var ref = srs.parse(fs.readFileSync('./test/data/maryland.prj'));
        assert.ok(ref.proj4);
        assert.equal(ref.name,'NAD83 / Maryland');
        done();
    });
});
