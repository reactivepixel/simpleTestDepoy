var expect = require('chai').expect;

describe('Basic Test Suite', () => {

  it('Tests for Heath of Fake Data', () => {
    const rawData = require('../src/tempdata.json');
    expect(rawData.fakeHealth).to.be.equal(true);
  });


});
