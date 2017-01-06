'use strict';

// Load modules

const Kata = require('../lib/kata');
const Code = require('code');
const Lab = require('lab');


// Test shortcuts

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;


describe('Wrapper', () => {

    it('is defined', (done) => {

        expect(Wrap).to.be.function();
        done();
    });

    it('split', (done) => {

        expect(Wrap('abc cba', 3)).to.equal('abc\ncba');
        done();
    });

});
