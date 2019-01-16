/* eslint-disable func-names */
/* eslint-disable no-undef */
const assert = require('assert');
const startup = require('../');

describe('electron-squirrel-startup', () => {
  it('should return false by default', () => {
    assert.equal(startup(), false);
  });
});
