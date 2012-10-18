var child_process = require('child_process'),
  still = require('../').build;

describe('Options', function () {

  describe('o, out', function () {
    it('Can output to a local path');
    it('Can output to an absolute path');
  });

  describe('e, engine', function () {
    it('Defaults to `swig`');
    it('Can be `jade`');
    it('Can be `ejs`');
  });

  describe('encoding', function () {
    it('Defaults to utf-8');
  });

  describe('v, verbose', function () {
    it('defaults to 0');

    describe('-1', function () {
      it('is silent');
    });
    describe('0', function () {
      it('only logs errors and build information');
    });
    describe('1', function () {
      it('logs warnings');
    });
    describe('2', function () {
      it('logs everything');
    });
  });

});